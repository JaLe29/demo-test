import fs from 'fs'
import path from 'path'
import rimraf from 'rimraf'
import autoExternal from 'rollup-plugin-auto-external'
import node from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'
import packageJson from '../../package.json'
import { getFilesFolders } from '../utils'

const distDirectory = path.join(__dirname, '../../dist')
const srcDirectory = path.join(__dirname, '../../src')
const buildFormats = ['cjs', 'es'] // include others if needed

function cleanDist() {
  rimraf.sync(distDirectory)
  fs.mkdirSync(distDirectory)
}

// The source-map-explorer package which powers `npm run analyze` works by
// examining the bundle.min.js.map file, so it's important to include the
// source maps of all the individual package bundles that went into
// building the final application bundle.
const sourceMapLoaderPlugin = {
  load(id) {
    if (id.endsWith('.esm.js')) {
      try {
        const map = JSON.parse(fs.readFileSync(id + '.map'))
        map.sources.forEach((source, i) => {
          map.sources[i] = path.normalize(path.join(id, source))
        })
        return {
          code: fs.readFileSync(id, 'utf8'),
          map: map
        }
      } catch (e) {
        console.log('failed to find source map for ' + id)
      }
    }
    return null
  }
}

function createReadmePackageJson() {
  fs.copyFileSync(path.join(__dirname, 'README_PACKAGE.md'), path.join(distDirectory, 'README.md'))
  fs.writeFileSync(
    path.join(distDirectory, 'package.json'),
    JSON.stringify(
      {
        name: packageJson.name,
        description: packageJson.description,
        version: packageJson.version,
        author: packageJson.author,
        license: packageJson.license,
        repository: packageJson.repository,
        keywords: packageJson.keywords,
        dependencies: packageJson.dependencies,
        peerDependencies: packageJson.peerDependencies
      },
      null,
      2
    )
  )
}

function getOutputs({ file }) {
  const fileDirectory = path.dirname(file)
  const fileDirectoryParent = path.dirname(path.dirname(file))
  const fileBaseName = path.basename(file)

  const shouldUseIndex = () => {
    return (
      !fs.existsSync(path.join(fileDirectory, 'index.js')) &&
      fileBaseName.replace(path.extname(fileBaseName), '') === fileDirectory.replace(fileDirectoryParent, '').slice(1)
    )
  }

  return buildFormats.map(format => {
    const fileDistDirectory = fileDirectory.replace('src', 'dist').replace(distDirectory, '')
    const output = {
      file: shouldUseIndex()
        ? path.join(distDirectory, format, fileDistDirectory, 'index.js')
        : path.join(distDirectory, format, fileDistDirectory, fileBaseName),
      format,
      exports: 'named'
    }
    return output
  })
}

cleanDist()

createReadmePackageJson()

export default getFilesFolders(srcDirectory)
  .filter(
    file =>
      file.includes('.js') &&
      !file.includes('examples') &&
      !file.includes('.mock.js') &&
      !file.includes('.test.js') &&
      !file.includes('.stories.js')
  )
  .map(file => ({
    input: file,
    output: getOutputs({ file }),
    plugins: [
      node({
        module: true
      }),
      autoExternal({ dependencies: false }),
      babel({
        exclude: '/node_modules/**'
      }),
      commonjs({
        namedExports: {
          'node_modules/react/index.js': ['Component', 'createElement', 'Children'],
          'node_modules/prop-types/index.js': [
            'any',
            'arrayOf',
            'bool',
            'func',
            'node',
            'number',
            'object',
            'oneOfType',
            'string'
          ],
          'node_modules/react/index.js': ['useContext', 'useReducer', 'useRef', 'useEffect', 'useState']
        }
      }),
      sourceMapLoaderPlugin,
      postcss({
        modules: fs.existsSync(file.replace('.js', '.module.scss')) || fs.existsSync(file.replace('.js', '.module.css'))
      }),
      terser()
    ]
  }))

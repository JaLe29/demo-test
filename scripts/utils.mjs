import fs from 'fs'
import path from 'path'

// const PUBLIC_DIRECTORY = 'src/ui'

// type - file, folder, both
const getFilesFolders = (dir, isRecursive = true, type = 'file') => {
	const data = fs.readdirSync(dir).reduce((files, file) => {
		const name = path.join(dir, file)
		const isDirectory = fs.statSync(name).isDirectory()

		// console.log(name)
		// if (name.endsWith(PUBLIC_DIRECTORY)) return files

		let fileFolder = []
		switch (type) {
			case 'file':
				fileFolder = isDirectory ? [] : [name]
				break
			case 'folder':
				fileFolder = isDirectory ? [name] : []
				break
			default:
				fileFolder = [name]
				break
		}
		const fileFolders = isRecursive && isDirectory ? getFilesFolders(name, isRecursive, type) : []
		return [...files, ...fileFolder, ...fileFolders]
	}, [])

	console.log(data)
	return data
}

const __dirname = path.dirname(new URL(import.meta.url).pathname)

export {getFilesFolders, __dirname}

import { storiesOf } from '@storybook/react'
import React from 'react'
import { storyConfig, storyConfigHelpers } from '../../../scripts/storybook/storyConfig'
import Comments from './Comments'

const name = 'Comments'
const category = `${storyConfig.corePrefix}${name}`
const config = storyConfigHelpers.getConfig({ name })

function CommentsDemo() {
  return <Comments />
}

storiesOf(category, module).add('Comments', CommentsDemo, config)

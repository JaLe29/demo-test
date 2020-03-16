import {storiesOf} from '@storybook/react'
import React from 'react'
import {storyConfig, storyConfigHelpers} from '../../../scripts/storybook/storyConfig'
import Comments from './Comments'

const name = 'Comments'
const category = `${storyConfig.corePrefix}${name}`
const config = storyConfigHelpers.getConfig({name})

function CommentsDemo () {
	const users = {
		'a': {
			image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSKxSbTqx77ZQMe1SNwZ5ejp9e9p_vD8cpEteM-u6mWff4gg4sX',
			name: 'Domísek',
		},
		'b': {},
		'c': {
			image: 'https://media-exp1.licdn.com/dms/image/C5603AQFqH5t8pWAOwg/profile-displayphoto-shrink_200_200/0?e=1590019200&v=beta&t=mY6gKgajLfWBhgnVXwWXrSivNC8UEFB52YEeNBI6XYI',
			name: 'Jakub Löffelmann'
		},
	}
	return (
		<Comments
			authKey={'835b553fb710a95a026c790dd54eb97b70efa3993f9d22ef2599be4a354153e0'}
			code={'about'}
			users={users}
			user={'c'}
		/>
	)
}

storiesOf(category, module).add('Comments', CommentsDemo, config)

import React, {useCallback} from 'react'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const css = {}

const Comment = ({text, createdAt}) => {
	const getDistance = useCallback(
		() => formatDistanceToNow(new Date(createdAt), {addSuffix: true}),
		[createdAt]
	)

	return (
		<div className={css.comment}>
			<div className={css.hedaer}>
				<span className={css.name}>FEJKNAME</span>
				<span className={css.date}>{getDistance()}</span>
			</div>
			<p className={css.text}>{text}</p>
		</div>
	)
}

export default Comment

import React, { useCallback } from 'react'
const css = {}

const Comment = ({ text, createdAt }) => {
  const getDistance = useCallback(() => new Date(createdAt).toJSON(), [createdAt])

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

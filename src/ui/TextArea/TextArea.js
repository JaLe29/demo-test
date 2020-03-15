import React, { useState, useEffect } from 'react'
// import css from './text-area.scss'
const css = {}
const TIMEOUT = 2000

// type Props = {
// 	inputState: string,
// 	onSubmit: (value: string) => void,
// 	setInputState: (value: string) => void,
// }

const TextArea = ({ onSubmit, setInputState, inputState }) => {
  const [isFocused, setFocused] = useState(false)
  const [value, setValue] = useState('')
  let blockEnter = false

  useEffect(() => {
    let timer
    if (inputState === 'done') {
      timer = setTimeout(() => {
        setFocused(false)
        setInputState('ready')
      }, TIMEOUT)
    }

    return () => {
      if (timer) clearTimeout(timer)
    }
  }, [inputState, setInputState])

  const handleFocus = () => setFocused(true)

  const handleChange = e => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      blockEnter = true

      const transformed = value.trim()
      if (transformed.length === 0) return
      onSubmit(transformed)
      setValue('')

      return
    }
    if (blockEnter) {
      blockEnter = false
      return
    }
    const text = e.target.value || ''
    setValue(text)
  }

  const cls = [css.textArea]
  if (!isFocused) cls.push(css.notFocused)
  else cls.push(css.normal)

  return ['sending', 'done'].includes(inputState) ? (
    'DONE'
  ) : (
    <textarea
      value={value}
      onChange={handleChange}
      onKeyDown={handleChange}
      onFocus={handleFocus}
      onBlur={() => setFocused(false)}
      className={cls.join(' ')}
      placeholder="Join the discussion..."
    />
  )
}

export default React.memo(TextArea)

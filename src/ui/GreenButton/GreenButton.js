import React, { useState } from 'react'

function GreenButton() {
  const [value, setValue] = useState(0)
  return <button onClick={() => setValue(value + 1)}>{value}</button>
}

GreenButton.propTypes = {}

export default GreenButton

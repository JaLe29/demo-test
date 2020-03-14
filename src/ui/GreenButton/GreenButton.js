import styles from './GreenButton.module.scss'
import PropTypes from 'prop-types'
import React, {useState} from 'react'

function GreenButton({ onClick, text }) {
const [value, setValue] = useState(0);
  return (
    <button className={styles.button} onClick={() => {setValue(value + 1); onClick()}}>
      {text} - {value}
    </button>
  )
}

GreenButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default GreenButton

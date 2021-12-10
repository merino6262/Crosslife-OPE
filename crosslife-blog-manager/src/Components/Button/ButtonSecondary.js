import React from 'react'
import styles from './Button.module.css'
const ButtonSecondary = ({children, ...props}) => {
  return (
    <button {...props} className={`${styles.button} ${styles.buttonSecondary}`}>{children}</button>
  )
}

export default ButtonSecondary

import React from 'react'
import styles from './InputFile.module.css'

const InputFile = ({refInputFile, ...props}) => {
  return (
    <input type="file" {...props} ref={refInputFile} className={styles.inputFile} />
  )
}

export default InputFile

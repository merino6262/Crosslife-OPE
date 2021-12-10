import React from 'react';
import styles from './Error.module.css';

const ErrorSecondary = ({error}) => {
  return (
    <p className={styles.errorSecondary}>{error}</p>
  )
}

export default ErrorSecondary

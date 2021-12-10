import React from 'react';
import styles from './Error.module.css';

const ErrorPrimary = ({error}) => {
  return (
    <p className={styles.errorPrimary}>{error}</p>
  )
}

export default ErrorPrimary

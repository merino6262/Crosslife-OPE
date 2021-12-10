import React from 'react';
import styles from './Input.module.css';
import ErrorPrimary from '../../Helper/Error/ErrorPrimary';

const Input = ({label, id, type, isBox, error, ...props}) => {
  return (
    <div className={styles.wrapper}>
      {
        label &&
        <label htmlFor={id} className={styles.label}>{label}</label>
      }
      {
        isBox ?
        <textarea type={type} id={id} name={id} className={styles.textarea} {...props}></textarea> :
        <input type={type} id={id} name={id} className={styles.input} {...props}/>
      }
      

      <ErrorPrimary error={error}/>
    </div>
  )
}

export default Input

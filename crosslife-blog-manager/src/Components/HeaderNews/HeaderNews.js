import React from 'react'
import styles from './HeaderNews.module.css'
import ButtonPrimary from '../Button/ButtonPrimary'
import ButtonSecondary from '../Button/ButtonSecondary'

const HeaderNews = ({title, buttonPrimary, buttonSecondary}) => {
  return (
    <header className={styles.headerNews}>
      <h2 className="title">{title}</h2>
      <div className={styles.groupButtons}>
        {buttonPrimary && <ButtonPrimary onClick={buttonPrimary.onClick}>{buttonPrimary.content}</ButtonPrimary>}
        {buttonSecondary && <ButtonSecondary onClick={buttonSecondary.onClick}>{buttonSecondary.content}</ButtonSecondary>}
      </div>
    </header>
  )
}

export default HeaderNews

import React from 'react'
import styles from './FormPartTwo.module.css'
import HeaderNews from '../HeaderNews/HeaderNews'
import SelectImage from '../SelectImage/SelectImage'
import CategoryList from '../CategoryList/CategoryList'
import PreviewImage from '../PreviewImage/PreviewImage'


const FormPartTwo = ({setPage, imageField, categoryField, handleSubmitNews}) => {
  const buttonSecondaryConfig = {
    content: "Enviar",
    onClick: handleSubmitNews
  }

  const ButtonPrimaryConfig = {
    content: "Voltar",
    onClick: () =>{
      setPage(1);
    }
  }

  return (
    <>
      <HeaderNews title="Criando notícia" buttonPrimary={ButtonPrimaryConfig} buttonSecondary={buttonSecondaryConfig}/>
      <div className={styles.wrapperConfigNews}>
        <form onSubmit={(event) => event.preventDefault()}>
          <h3 className="subtitle">Capa para a notícia</h3>
          {
            imageField.imageUrl.preview ?
            <PreviewImage imageFile={imageField}/> :
            <SelectImage setImageUrl={imageField.setImageUrl}/>
          }
        </form>

        <div>
          <h3 className="subtitle">Escolha as categorias</h3>
          <p className="description">
            Selecione uma categoria que mais se aproxime do assunto da notícia criada.
          </p>
          <CategoryList setCategory={categoryField.setCategory} category={categoryField.category}/>
        </div>
      </div>
    </>
  )
}

export default FormPartTwo

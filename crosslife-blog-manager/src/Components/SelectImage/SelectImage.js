import React from 'react'
import styles from './SelectImage.module.css'
import ButtonSecondary from '../Button/ButtonSecondary'
import InputFile from '../InputFile/InputFile';

const SelectImage = ({setImageUrl}) => {
  const inputFileRef = React.useRef();

  const handleChange = ({target}) => {
    const file = target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageUrl({
        preview: URL.createObjectURL(file),
        image: {
          "blob": reader.result.replace(/^data:image\/[a-z]+;base64,/, ""),
          "nome_do_arquivo": file.name
        },
      });
      console.log(reader.result)
    }
    reader.readAsDataURL(file); 
  }

  return (
    <div className={styles.wrapperImage}>
      <p className="description">
        Adicione uma foto em sua noticia para poder adicionar uma capa atrativa
      </p>

      <ButtonSecondary onClick={() => inputFileRef.current.click()}>
        Selecione uma imagem
        <InputFile id="image" name="image" refInputFile={inputFileRef} onChange={handleChange}/>
      </ButtonSecondary>
    </div>
  )
}

export default SelectImage

import React from 'react'
import styles from './PreviewImage.module.css'
import InputFile from '../InputFile/InputFile';
import {ReactComponent as Pencil} from '../../Assets/pencil.svg'

const PreviewImage = ({imageFile}) => {
  const inputFileRef = React.useRef();

  const handleChange = ({target}) => {
    const file = target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      imageFile.setImageUrl({
        preview: URL.createObjectURL(file),
        image: {
          "blob": reader.result.replace(/^data:image\/[a-z]+;base64,/, ""),
          "nome_do_arquivo": file.name
        },
      });
    }
    reader.readAsDataURL(file); 
  }

  return (
    <div className={styles.wrapperPreview}>
      <img src={imageFile.imageUrl.preview} alt="capa notícia" className={styles.image}/>
      <button onClick={() => inputFileRef.current.click()} className={styles.buttonEdit}>
        <Pencil />
        <InputFile id="image" name="image" refInputFile={inputFileRef} onChange={handleChange}/>
      </button>
    </div>
  )
}

export default PreviewImage

import React from 'react';
import styles from './ModalDelete.module.css';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import useOutsideClick from '../../Hooks/useOutsideClick';
import Input from '../Input/Input';
import ButtonSecondary from '../Button/ButtonSecondary';
import {ReactComponent as Cross} from '../../Assets/cross.svg';
import { NEWS_DELETE } from '../../Services/API';

const ModalDelete = ({setModalDelete, modalDelete}) => {
  const titleNews = useForm(modalDelete.titulo);
  const {request} = useFetch();
  const wrapperRef = React.useRef(null);
  useOutsideClick(wrapperRef, setModalDelete, false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (titleNews.validate()){
      const {url, options} = NEWS_DELETE(modalDelete.id);
      const {response} = await request(url, options);
      if (response.ok) window.location.reload();
    }
  }

  return (
    <div className={styles.modalDelete}>
      <div className={styles.modalBox} ref={wrapperRef}>
        <div className={styles.modalHeader}>
          <h1>Você tem certeza disso?</h1>
          <button onClick={() => {setModalDelete(false)}}><Cross /></button>
        </div>
        <div className={styles.modalBody}>
          <p className={styles.modalText}>
            Esta ação não pode ser desfeita. Isso excluirá permanentemente a notícia, incluindo todo conteúdo dela como fotos e textos. Se não tiver certeza pode clicar no X acima para fechar o alerta.
          </p>

          <p className={styles.modalText}>
            Digite <span className={styles.titleNews}>{modalDelete.titulo}</span> na caixa abaixo e clique no botão para confirmar a exclusão
          </p>

          <form className={styles.modalForm} onSubmit={handleSubmit}>
            <Input label={false} id="titleNews" type="text" {...titleNews}/>
            <ButtonSecondary>Exclua esta notícia</ButtonSecondary>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ModalDelete

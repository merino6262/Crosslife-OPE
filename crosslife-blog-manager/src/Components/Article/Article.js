import React from 'react'
import styles from './Article.module.css';
import { Link } from 'react-router-dom';
import ListOptions from '../ListOptions/ListOptions';
import {ReactComponent as Options} from '../../Assets/options.svg';
import {ReactComponent as Pencil} from '../../Assets/pencil.svg';
import {ReactComponent as Trash} from '../../Assets/trash.svg';

const Article = ({news, setModalDelete}) => {
  const [active, setActive] = React.useState(false);
  const buttonVisibilityControlRef = React.useRef(null);
  const id = `listOptionsNews${news.id}`;

  const convertDate = (dateAmericanFormat, format) => {
    const date = new Date(dateAmericanFormat+"T00:00:00");
    return date.toLocaleDateString(format);
  }

  const handleChangesStates = () => {
    setModalDelete(news);
    setActive(false);
  }

  return (
    <article className={styles.article}>
      <button className={styles.moreOptions} aria-controls={id} onClick={() => {setActive(!active)}} ref={buttonVisibilityControlRef}>
        <Options />
      </button>

      {
        active && 
        <ListOptions id={id} classOptions="listOptionsNews" setActive={setActive} buttonVisibilityControlRef={buttonVisibilityControlRef}>
          <li><Link to={`editar/${news.id}`} className="wrapperListItem"><Pencil/> <span>Editar</span></Link></li>
          <li><button className="wrapperListItem" onClick={handleChangesStates}><Trash/> <span>Deletar</span></button></li>
        </ListOptions>
      }
      
      <h3 className={styles.aticleTitle}>{news.titulo}</h3>
      <p className={styles.aticleText}>postado em <span className={styles.date}>{convertDate(news.data_criacao, 'pt-BR')}</span></p>
      <span className={styles.category}>{news.categoria}</span>
    </article>
  );
}

export default Article

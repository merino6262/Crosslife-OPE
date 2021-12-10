import React from 'react'
import { Link, useParams } from 'react-router-dom';
import Header from '../Components/Header';

const Categoria = () => {
  const [data, setData] = React.useState();
  const {categoria} = useParams();
  const convertDate = (dateAmericanFormat, format) => {
    const date = new Date(dateAmericanFormat+"T00:00:00");
    return date.toLocaleDateString(format);
  }

  React.useEffect(()=>{
    const handleFetch = async () => {
      const response = await fetch(`https://crosslifeapi.herokuapp.com/noticias?categoria=${categoria}`)
      const json = await response.json();
      setData(json)
    }
    handleFetch()
  }, [setData, categoria])

  if(data)
    return (
      <>
        <Header />
        <section class="blog" id="blog">
          <h2 class="title categoryTitle">{categoria}</h2>
          <div class="container">
            {data.map((news)=> (
              <article class="news">
                <Link to={`noticia/${news.id}`}>
                  <h4>{news.titulo}</h4>
                  <p>por <span class="name">{news.autor}</span> em {convertDate(news.data_criacao, 'pt-BR')}</p>
                  <span class="category">{news.categoria}</span>
                </Link>
              </article>
            ))}
          </div>

          <a href="/" class="button button-primary centralized-button">1</a>
        </section>
      </>
    )
  else{
    return null
  }
}

export default Categoria

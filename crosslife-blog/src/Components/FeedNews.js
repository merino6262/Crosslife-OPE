import React from 'react'
import { Link } from 'react-router-dom';

const FeedNews = () => {
  const [data, setData] = React.useState();
  const convertDate = (dateAmericanFormat, format) => {
    const date = new Date(dateAmericanFormat+"T00:00:00");
    return date.toLocaleDateString(format);
  }

  React.useEffect(()=>{
    const handleFetch = async () => {
      const response = await fetch('https://crosslifeapi.herokuapp.com/noticias')
      const json = await response.json();
      setData(json)
    }
    handleFetch()
  }, [setData])

  if(data)
    return (
      <section class="blog" id="blog">
        <h2 class="title">NOTICIAS</h2>
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
    )
  else{
    return null
  }
}

export default FeedNews

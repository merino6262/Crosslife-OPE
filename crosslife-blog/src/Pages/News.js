import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../Components/Header'
import twitter from "../Assets/twitter.png"
import linkedin from "../Assets/linkedin.png"
import facebook from "../Assets/facebook02.png"
import Footer from '../Components/Footer'
import NewsLimit from '../Components/NewsLimit'


const News = () => {
  const {id} = useParams();
  const [news, setNews] = React.useState()
  const convertDate = (dateAmericanFormat, format) => {
    const date = new Date(dateAmericanFormat+"T00:00:00");
    return date.toLocaleDateString(format);
  }

  React.useEffect(()=>{
    const handleFetch = async () => {
      const response = await fetch(`https://crosslifeapi.herokuapp.com/noticia/${id}`);
      const json = await response.json();
      setNews(json);
    }
    handleFetch()
  }, [setNews, id])

  if(news)
  return (
    <>
      <Header/>
      <main class="container containerMain">
        <h2 class="title">{news.titulo}</h2>
        <p class="assinado">por <span class="name">{news.autor}</span> - em {convertDate(news.data_criacao, 'pt-BR')}</p>
        {news["capa_url"]? <img  class="neymar" src={news["capa_url"]} alt='capa notícia'/>: ""}
        {news.corpo.split("\n").map((text)=>(
          <p class="paragrafo">
            {text}
          </p>
        ))}

        <div class="redes">
          <ul>
            <li><img src={twitter} alt='icone do twitter'/></li>
            <li><img src={linkedin} alt='icone do linkedin'/></li>
            <li><img src={facebook} alt='icone do facebook'/></li>
          </ul>

          <span class="categorian">{news.categoria}</span>
        </div>
      </main>
      <NewsLimit />
      <Footer/>
    </>
  )
  else{
    return null
  }
}

export default News

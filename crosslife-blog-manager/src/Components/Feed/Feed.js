import React from 'react'
import styles from './Feed.module.css'
import useFetch from '../../Hooks/useFetch'
import { NEWS_GET } from '../../Services/API';
import Article from '../Article/Article';
import ErrorSecondary from '../../Helper/Error/ErrorSecondary';

const Feed = ({setModalDelete}) => {
  const {data, error, loading, request} = useFetch();

  React.useEffect(() => {
    const {url, options} = NEWS_GET();
    request(url, options)
  }, [request]);

  if(error) return <ErrorSecondary error={error}/>
  if(loading) return <p>Carregando...</p>
  if(data)
    return (
      <section className={styles.feed}>
        {
          data.map((news) => <Article key={news.id} news={news} setModalDelete={setModalDelete}/>)
        }
      </section>
    )
  else return null
}

export default Feed

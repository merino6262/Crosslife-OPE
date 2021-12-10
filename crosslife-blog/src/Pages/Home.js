import React from 'react'
import FeedNews from '../Components/FeedNews'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Introduction from '../Components/Introduction'
import MostRead from '../Components/MostRead'


const Home = () => {
  return (
    <>
      <Header/>
      <Introduction />
      <MostRead />
      <FeedNews />
      <Footer />
    </>
  )
}

export default Home

import React from 'react'
import Hero from '../components/Hero'
import Row from '../components/Row'
import requests from '../Requests'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <>
      < Navbar />
      <Hero />
      <Row rowId= '1' title = 'Airing Today' fetchURL = {requests.requestHorror}/>
      <Row rowId= '2' title = 'Popular' fetchURL = {requests.requestPopular}/>
      <Row rowId= '3' title = 'Top Rated' fetchURL = {requests.requestTopRated}/>
      <Row rowId= '4' title = 'Trending' fetchURL = {requests.requestTrending}/>
      <Row rowId= '5' title = 'UpComing' fetchURL = {requests.requestUpcoming}/>
      <Footer />
    </>
  )
}

export default Home

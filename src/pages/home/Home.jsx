import React from 'react'
import Banner from './Banner'
import TopSellers from './TopSellers'
import RecommendedBooks from './RecommendedBooks'
import News from './News'

const Home = () => {
  return (
    <>
    <Banner/>
    <TopSellers/>
    <RecommendedBooks />
    <News/>
    </>
  )
}

export default Home
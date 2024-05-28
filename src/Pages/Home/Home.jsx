import React, { useState } from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay';
import AppDownload from '../../Components/AppDownload/AppDownload';
import Footer from '../../Components/Footer/Footer';



function Home() {
  const [category, setCetegory] = useState("All");
  return (
    <div>
      <Header/>
      <ExploreMenu category= {category} setCetegory= {setCetegory}/>
      <FoodDisplay category={category}/>
      <AppDownload/>
      <Footer/>
          </div>
  )
}

export default Home
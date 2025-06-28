import { useState, useEffect } from 'react'
import '../App.css'
import Navbar from '../Components/Navbar.jsx';
import Funding from '../Components/Funding.jsx';
import Navbar2 from '../Components/Navbar2.jsx';
import Headlines from '../Components/Headlines.jsx';
import Category from '../Components/Category.jsx';
import Footer from '../Components/Footer.jsx';


function Landing() {

  return (
    <>
      <Navbar/>
      <Funding/>
      <Navbar2/>
      <div className='main-body'>
        <Headlines/>
        <Category name="United States" sectionId="us-news"/>
        <Category name="World" sectionId="world"/>
        <Category name="Sport" sectionId="sport"/>
        <Category name="Business" sectionId="business"/>
        <Category name="Entertainment" sectionId="music"/>
        <Category name="Science" sectionId="science"/>
        <Category name="Travel" sectionId="travel"/>
        <Category name="Food" sectionId="food"/>
      </div>
      <Footer/>
    </>
  )
}

export default Landing

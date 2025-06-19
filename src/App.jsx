import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar.jsx';
import Funding from './Components/Funding.jsx';
import Navbar2 from './Components/Navbar2.jsx';
import Headlines from './Components/Headlines.jsx';
import Category from './Components/Category.jsx';
import Footer from './Components/Footer.jsx';

function App() {
  return (
    <>
      <Navbar/>
      <Funding/>
      <Navbar2/>
      <div className='main-body'>
        <Headlines/>
        <Category name="United States"/>
        <Category name="World"/>
        <Category name="Sport"/>
        <Category name="Business"/>
        <Category name="Entertainment"/>
        <Category name="Science"/>
        <Category name="Travel"/>
        <Category name="Food"/>
      </div>
      <Footer/>
    </>
  )
}

export default App

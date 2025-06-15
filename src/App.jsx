import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar.jsx';
import Funding from './Components/Funding.jsx';
import Navbar2 from './Components/Navbar2.jsx';

function App() {
  return (
    <>
      <Navbar/>
      <Funding/>
      <Navbar2/>
    </>
  )
}

export default App

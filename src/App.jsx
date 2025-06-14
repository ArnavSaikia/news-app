import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar.jsx';
import Funding from './Components/Funding.jsx';

function App() {
  return (
    <>
      <Navbar/>
      <Funding/>
    </>
  )
}

export default App

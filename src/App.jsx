import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Pages/Landing.jsx';
import CategoryPage from './Pages/CategoryPage.jsx';


function App() {

  return (
    <Router basename='/news-app'>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/category/:id' element={<CategoryPage/>}/>
      </Routes>
    </Router>
  )
}

export default App

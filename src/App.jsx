import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/next"
import Landing from './Pages/Landing.jsx';
import CategoryPage from './Pages/CategoryPage.jsx';
import ArticlePage from './Pages/ArticlePage.jsx';
import SearchPage from './Pages/SearchPage.jsx';
import ScrollToTop from './Components/ScrollToTopScript.jsx';


function App() {

  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/category/:id' element={<CategoryPage/>}/>
        <Route path='/article/:articleId' element={<ArticlePage/>}/>
        <Route path='/search/:searchQuery' element={<SearchPage/>}></Route>
      </Routes>
      <Analytics />
    </Router>
  )
}

export default App

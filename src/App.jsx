import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Pages/Landing.jsx';
import CategoryPage from './Pages/CategoryPage.jsx';
import ArticlePage from './Pages/ArticlePage.jsx';
import SearchPage from './Pages/SearchPage.jsx';
import ScrollToTop from './Components/ScrollToTopScript.jsx';


function App() {

  return (
    <Router basename='/news-app'>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/category/:id' element={<CategoryPage/>}/>
        <Route path='/article/:articleId' element={<ArticlePage/>}/>
        <Route path='/search/:searchQuery' element={<SearchPage/>}></Route>
      </Routes>
    </Router>
  )
}

export default App

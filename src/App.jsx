import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Pages/Landing.jsx';
import CategoryPage from './Pages/CategoryPage.jsx';
import ArticlePage from './Pages/ArticlePage.jsx';
import SearchPage from './Pages/SearchPage.jsx';


function App() {

  return (
    <Router basename='/news-app'>
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

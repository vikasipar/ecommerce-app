import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Page404 from './pages/Page404';
import Navbar from './components/Navbar';
import Features from './components/Features';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/nav' element={<Navbar />} />
        <Route path='/features' element={<Features />} />
        <Route path='/products' element={<Products />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/*' element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
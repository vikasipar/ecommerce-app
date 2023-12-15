import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Page404 from './pages/Page404';
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/products' element={<Products />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/*' element={<Page404 />} />
      </Routes>
      <Footer />
      </Provider>
    </BrowserRouter>
  )
}

export default App;
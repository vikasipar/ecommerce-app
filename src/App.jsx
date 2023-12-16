import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Toaster } from 'sonner';
import store from './store/store';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Page404 from './pages/Page404';
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import UserAuth from './pages/UserAuth';
import Checkout from './pages/Checkout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
    <ToastContainer />
    <Toaster 
      toastOptions={{
        style:{backgroundColor:'rgba(30, 30, 30, 0.9)', color:'whitesmoke',fontSize:'1rem'},
      }} 
      />
    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/products' element={<Products />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/auth' element={<UserAuth />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/*' element={<Page404 />} />
      </Routes>
      <Footer />
      </Provider>
    </BrowserRouter>
  )
}

export default App;
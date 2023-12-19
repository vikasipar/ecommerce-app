import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'sonner';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Page404 from './pages/Page404';
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import UserAuth from './pages/UserAuth';
import Checkout from './pages/Checkout';
import { useSelector } from 'react-redux';

function App() {
    const usertoken = useSelector(state => state.auth.token);

  return (
    <BrowserRouter>
    <ToastContainer />
    <Toaster 
      toastOptions={{
        style:{backgroundColor:'rgba(30, 30, 30, 0.9)', color:'whitesmoke',fontSize:'1rem'},
      }} 
      />
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/products' element={<Products />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/auth' element={<UserAuth />} />
        <Route path='/checkout' element={usertoken !== null ? <Checkout /> : <Navigate to={'/auth'} />} />
        <Route path='/*' element={<Page404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
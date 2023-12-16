import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Toaster } from 'sonner';
// import firebase from 'firebase/app';
// import 'firebase/auth';
// import firebaseConfig from '../firebase.config';
import store from './store/store';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Page404 from './pages/Page404';
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import UserAuth from './pages/UserAuth';

function App() {
  return (
    <BrowserRouter>
    <Toaster 
      toastOptions={{
        // style:{backgroundColor:'black', color:'white',},
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
        <Route path='/*' element={<Page404 />} />
      </Routes>
      <Footer />
      </Provider>
    </BrowserRouter>
  )
}

export default App;
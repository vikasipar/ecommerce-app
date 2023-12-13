import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import Features from '../components/Features';
import Footer from '../components/Footer';
import Products from './Products';

function Homepage() {
  return (
    <div>
        <Navbar />
        <Hero />
        <FeaturedProducts />
        {/* <Products /> */}
        <Features />
        <Footer />
    </div>
  )
}

export default Homepage;
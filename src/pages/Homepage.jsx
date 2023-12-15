import React from 'react';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import Features from '../components/Features';
import Products from './Products';

function Homepage() {
  return (
    <div>
        <Hero />
        <FeaturedProducts />
        {/* <Products /> */}
        <Features />
    </div>
  )
}

export default Homepage;
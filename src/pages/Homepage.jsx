import React from 'react';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import Features from '../components/Features';

function Homepage() {
  return (
    <div>
        <Hero />
        <FeaturedProducts />
        <Features />
    </div>
  )
}

export default Homepage;
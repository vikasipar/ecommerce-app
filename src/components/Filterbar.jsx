import React from 'react';

function Filterbar(props) {

    const categories = ['All Products','jewelery','electronics',`men's clothing`,`women's clothing`];
    
  return (
    <div className="categories w-[95%] md:w-[60%] mx-auto my-5 flex flex-wrap justify-around">
        {categories.map((category) => (
            <span key={category} 
            onClick={() => props.handleClick(category)}
            className={`border-2 cursor-pointer px-5 my-1 rounded border-gray-900 ${props.select===category ? ' bg-rgba-dark-90 text-white' : 'border-stone-700/90 text-gray-900'}`}>{category[0].toUpperCase()+category.slice(1)}</span>
        ))}
      </div>
  )
}

export default Filterbar;
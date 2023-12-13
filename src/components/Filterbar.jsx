import React from 'react';

function Filterbar(props) {

    const categories = ['All Products','jewelery','electronics',`men's clothing`,`women's clothing`];
    
  return (
    <div className="categories w-[60%] mx-auto my-5 flex justify-around">
        {categories.map((category) => (
            <span key={category} 
            onClick={() => props.handleClick(category)}
            className={`border-2 cursor-pointer px-5 border-gray-900 ${props.select===category ? ' bg-stone-700 text-white' : 'border-stone-700 text-gray-900'}`}>{category[0].toUpperCase()+category.slice(1)}</span>
        ))}
      </div>
  )
}

export default Filterbar;
import React from 'react';
import StarRating from './StarRating';
import { Link } from 'react-router-dom';

function Card(props) {
    let productName = `${props.item.name}`;
    if(productName.length > 20){
        productName = productName.substring(0, 20) + '..';
    }
  return (
    <div className='w-[270px] h-[420px] flex-column mx-auto my-4 border-stone-400 p-7 border-2 shadow rounded-md'>
        <Link to={`/product/${props.item.key}`} >
            <div className='w-[200px] h-[250px] mx-auto'>
                <img className='w-[98%] h-[95%] hover:w-[100%] hover:h-[98%]' src={props.item.src} alt={props.item.key} />
            </div>
            <div className='flex-column justify-center'>
                <h3 className='text-md font-bold text-center uppercase'>{productName}</h3>
                <h3 className='text-md font-bold text-center '>${props.item.price}</h3>
                <p className='text-sm text-center font-semibold text-gray-600 uppercase'>{props.item.cat}</p>
                <div className='flex items-end w-[60%] mx-auto'><StarRating  rating={props.item.rating.rate} /> <span className='text-gray-500 text-sm'>{props.item.rating.count}</span></div>
            </div>
        </Link>
    </div>
  )
}

export default Card;
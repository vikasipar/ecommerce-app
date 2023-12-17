import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import StarRating from './StarRating';

function Card(props) {

    const dispatch = useDispatch();

    let productName = `${props.item.name}`;
    if(productName.length > 17){
        productName = productName.substring(0, 17) + '..';
    }

    const addToCartHandler = (product) =>{
        dispatch(addToCart(product));
    };

  return (
    <div className='w-[270px] h-[450px] flex-column mx-auto my-4 border-stone-200 p-7 border-2 shadow-xl rounded-md bg-rgba-white-80'>
        <Link to={`/product/${props.item.key}`} >
            <div className='w-[200px] h-[250px] mx-auto'>
                <img className='w-[98%] h-[95%] hover:w-[100%] hover:h-[98%]' src={props.item.src} alt={props.item.key} />
            </div>
            <div className='flex-column justify-center'>
                <h3 className='text-md font-bold text-center uppercase'>{productName}</h3>
                <h3 className='text-md font-bold text-center '>${props.item.price}</h3>
                <p className='text-sm text-center font-semibold text-gray-600 uppercase'>{props.item.cat}</p>
                <div className='flex items-end w-[60%] mx-auto'><StarRating  rating={props.item.rating.rate} /> <span className='text-gray-500 text-sm'>({props.item.rating.count})</span></div>
            </div>
        </Link>
        <button onClick={() => addToCartHandler(props.item)} className='w-full h-[40px] border-2 bg-stone-700/90 hover:bg-stone-800/90 rounded mt-3 text-lg text-white uppercase'>Add To Cart</button>
    </div>
  )
}

export default Card;
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import StarRating from '../components/StarRating';

function ProductDetails() {
  const { id } = useParams();
  const[product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setIsLoading(false);
      });
  },[id]);

  const addToCartHandler = (product) =>{
    dispatch(addToCart(product));
  };

  return (
    <>    
    {isLoading ? 
      <div className="w-[100vw] h-[100vh] flex items-center justify-center">
        <div className="animate-spin rounded-full border-t-4 border-black border-solid h-14 w-14"></div>
      </div>
    :
      <div className='flex h-[100vh] w-[85%] my-auto mx-auto items-center '>
        <div className='w-[50%] text-left'>
          <h1 className='text-[2.8rem] text-gray-900 font-extrabold'>{product.title}</h1>
          <p className='text-2xl uppercase font-bold text-gray-500 my-2'>{product.category}</p>
          <p className='text-justify text-gray-800'>{product.description}</p>
          <h3 className='text-[2.5rem] uppercase font-bold text-gray-900'>${product.price}</h3>
          {product.rating && <span className='flex items-end w-[20%] mx-0'><StarRating  rating={product.rating.rate} /> <span className='text-gray-500 text-sm'>{product.rating.count}</span></span>}
          <button onClick={() => addToCartHandler(product)} className='w-[45%] py-2 border-2 bg-gray-950 mt-7 text-xl font-semibold text-white uppercase'>Add To Cart</button>
        </div>
        <div className='w-[50%]'>
          <img className='w-[65%] mx-auto' src={`${product.image}`} alt={id} />
        </div>
      </div>
    }
    </>
  )
}

export default ProductDetails;
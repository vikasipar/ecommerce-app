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
      <div className='md:flex md:h-[100vh] w-[90%] md:w-[85%] my-auto mx-auto items-center'>
        <div className='md:w-[50%] text-left'>
          <img className='md:hidden w-[55%] mx-auto my-14' src={`${product.image}`} alt={id} />
          <p className='md:text-2xl uppercase font-bold text-gray-500 my-2'>{product.category}</p>
          <h1 className='text-2xl md:text-[2.8rem] text-gray-900 font-extrabold leading-tight'>{product.title}</h1>
          <div className='md:hidden flex items-start my-2'>
              <h3 className='block md:hidden  text-[1.9rem] uppercase font-bold text-gray-900'>${product.price}</h3>
              {product.rating && <span className='flex md:hidden items-end mx-auto'><StarRating  rating={product.rating.rate} /> <span className='text-gray-500 text-sm'>{product.rating.count}</span></span>}
          </div>
          <button onClick={() => addToCartHandler(product)} className='block md:hidden w-[69%] mx-auto py-2 bg-gray-950 my-1 text-base font-semibold text-white uppercase shadow-sm'>Add To Cart</button>
          <p className='my-3 md:my-auto text-justify text-gray-800'>{product.description}</p>
          <h3 className='hidden md:block md:text-[2.5rem] uppercase font-bold text-gray-900'>${product.price}</h3>
          {product.rating && <span className='hidden md:flex items-end w-[20%] mx-0'><StarRating  rating={product.rating.rate} /> <span className='text-gray-500 text-sm'>{product.rating.count}</span></span>}
          <button onClick={() => addToCartHandler(product)} className='hidden md:block w-[45%] py-2 border-2 bg-gray-950 mt-7 text-xl font-semibold text-white uppercase'>Add To Cart</button>
        </div>
        <div className='hidden md:block w-[50%]'>
          <img className='w-[65%] mx-auto' src={`${product.image}`} alt={id} />
        </div>
      </div>
    }
    </>
  )
}

export default ProductDetails;
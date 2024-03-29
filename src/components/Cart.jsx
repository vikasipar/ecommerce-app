import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { FaTimes } from "react-icons/fa";
import { BsCartX } from "react-icons/bs";
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../store/cartSlice';
import { toggleCart } from '../store/authSlice';
import { Link } from 'react-router-dom';

function Cart() {

  const products = useSelector(state => {
    return state.cart;
  });

  const dispatch = useDispatch();

  const removeFromCartHandler = (id) =>{
    dispatch(removeFromCart(id));
  }

  const increaseQuantityHandler = (id) => dispatch(increaseQuantity(id));
  const decreaseQuantityHandler = (id) => dispatch(decreaseQuantity(id));

  const totalAmount = products.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);

  return (
    <div className={`w-screen overflow-scroll md:w-[45vw] h-screen p-5 top-11 right-0 absolute z-10 bg-stone-100 text-black shadow-2xl shadow-stone-950 transition-opecity opecity-0 animate-fade-in space-y-2  delay-100`}>

      <div>
        {products.length>0 ?
        <div>
          <h3 className='uppercase font-semibold text-2xl text-stone-600'>Items in your cart</h3>
        </div> 
        :
        <div className='text-center space-y-9'>
          <BsCartX className='text-9xl text-stone-400 mx-auto my-5' />
          <div>
            <h3 className='text-3xl my-4'>Your Cart Is <span className='text-red-600'>Empty!</span></h3>
            <p>Must add items on the cart before you proceed to ckeck out.</p>
          </div>
            <Link to={'/products'} >
          <button className='border-2 w-[80%] mx-[10%] mt-9 py-3 uppercase bg-[#ffbf00] hover:bg-[#ffa500] text-stone-900 rounded-md text-sm font-semibold' onClick={() => dispatch(toggleCart())}>Return to shop</button>
          </Link>
        </div>
        }
      </div>
      {
        products.map((product) => (
          <div key={product.key} className='h-[120px] shadow p-2 text-stone-800 bg-rgba-white-80 border-gray-300 w-[97%] justify-around mx-auto text-center md:text-left flex items-center'>
            <div className="bg-transparent w-[23%] inline-block">
            <img src={product.src} alt={product.key} className='w-[80px]' />
            </div>
            <div className='font-semibold flex-col w-[40%]'>
              <h3>{product.name && product.name.length > 20 ? product.name : (product.name ? product.name.substring(0, 20) : '')}</h3>
              <h3>${product.price}</h3>
            </div>
            <div className='flex items-center space-x-2 w-[15%]'> <IoMdRemove className='text-[#ffa500] cursor-pointer' onClick={() => decreaseQuantityHandler(product.key)} /> <span>{product.quantity}</span> <IoMdAdd className='text-[#ffa500] cursor-pointer' onClick={() => increaseQuantityHandler(product.key)} /></div>
            <div className='w-[15%] font-semibold'>{(product.price * product.quantity).toFixed(2)}</div>
            <div className='w-[3%] mb-20 text-sm text-stone-400 hover:text-red-600'><FaTimes className='cursor-pointer' onClick={() => removeFromCartHandler(product.key)} /></div>
          </div>
        ))
      }
      { products && products.length > 0 && <div className='font-semibold text-xl pt-2 border-t-4 border-stone-500'>
        <div className='flex justify-between sm:mx-16'><span>Total Amount:</span> <span>${totalAmount.toFixed(2)}</span></div>
        <Link to={'/checkout'}><button onClick={() =>  dispatch(toggleCart())} className='border-2 w-[90%] mx-[5%] mt-9 py-3 uppercase bg-[#ffbf00] hover:bg-[#ffa500] text-stone-900 rounded-md text-sm font-semibold'>Proceed to Checkout</button></Link>
      </div>}
    </div>
  )
}

export default Cart;
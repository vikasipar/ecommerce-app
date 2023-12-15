import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { MdDeleteForever } from "react-icons/md";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { FaTimes } from "react-icons/fa";
import { BsCartX } from "react-icons/bs";
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../store/cartSlice';

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
    <div className={`w-screen overflow-scroll md:w-[45vw] {products.length > 5 ? h-screen : h-max} p-5 top-11 right-0 absolute z-10 bg-stone-100 text-black shadow-2xl shadow-stone-950 transition ease-out space-y-2`}>
      <div>
        {products.length>0 ?
        <div>
          <h3 className='uppercase font-semibold text-2xl text-stone-600'>Items in your bag</h3>
        </div> 
        :
        <div className='text-center space-y-9'>
          <BsCartX className='text-9xl text-stone-400 mx-auto my-5' />
          <div>
            <h3 className='text-3xl my-4'>Your Cart Is <span className='text-red-600'>Empty!</span></h3>
            <p>Must add items on the cart before you proceed to ckeck out.</p>
          </div>
            {/* need change in code - add variable isCartVisible in redux store */}
          <button className='border-2 w-[35%] py-3 uppercase bg-stone-600 hover:bg-stone-700 text-white rounded-md text-sm'>Return to shop</button>
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
              <h3>{!product.name.length>20 ? product.name : product.name.substring(0, 20) }</h3>
              <h3>${product.price}</h3>
            </div>
            <div className='flex items-center space-x-2 w-[15%]'> <IoMdRemove className='text-[#ffa500] cursor-pointer' onClick={() => decreaseQuantityHandler(product.key)} /> <span>{product.quantity}</span> <IoMdAdd className='text-[#ffa500] cursor-pointer' onClick={() => increaseQuantityHandler(product.key)} /></div>
            <div className='w-[15%] font-semibold'>{(product.price * product.quantity).toFixed(2)}</div>
            <div className='w-[3%] mb-20 text-sm text-stone-400 hover:text-red-600'><FaTimes className='cursor-pointer' onClick={() => removeFromCartHandler(product.key)} /></div>
          </div>
        ))
      }
      { products.length>0 && <div className='font-semibold text-xl pt-2 border-t-4 border-stone-500'>
        <div className='flex justify-between mx-16'><span>Total Amount:</span> <span>${totalAmount.toFixed(2)}</span></div>
        <button className='border-2 w-[90%] mx-[5%] mt-9 py-3 uppercase bg-[#ffbf00] hover:bg-[#ffa500] text-white rounded-md text-sm'>Proceed to Checkout</button>
      </div>}
    </div>
  )
}

export default Cart;
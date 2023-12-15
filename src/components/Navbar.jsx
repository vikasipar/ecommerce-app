import React, {useState} from 'react';
import { BsCart3 } from "react-icons/bs";
import { LuUserCircle } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Cart from './Cart';

function Navbar() {
    const [cartVisible, setCartVisible] = useState(false);

    const cartHandler = () => {
        setCartVisible(!cartVisible);
    }

    const items = useSelector(state => state.cart);

  return (
    <div className='w-screen md:w-full mb-5 my-1 py-1 px-5 flex justify-between items-center bg-rgba-dark-90 shadow-2xl text-white relative'>
        <div className='w-[30%] font-semibold text-2xl text-[#eee600] font-serif'><Link to={'/'}>ezmart</Link></div>
        <div className='w-[55%] flex justify-between items-center font-semibold'>
            <div className='hidden md:block w-[60%] flex justify-around text-stone-200 text-md font-normal space-x-10'>
                <Link to={'/'} ><span className='hover:text-[#eee600]'>Home</span></Link>
                <Link to={'/products'} ><span className='hover:text-[#eee600]'>Categories</span></Link>
                <span className='hover:text-[#eee600] cursor-pointer'>About</span>
            </div>
            <div className='md:w-[16%] flex justify-end md:justify-around text-2xl text-white'>
                <span className='flex'><BsCart3 className='cursor-pointer hidden md:block' onClick={cartHandler}/><span className='hidden md:flex text-sm w-4 h-4 mx-auto flex justify-center items-center rounded-full bg-red-500'>{items.length}</span></span>
                <LuUserCircle className='hidden md:block' />
            </div>
        </div>
        <div className='block md:hidden'>
            <span className='flex md:hidden'><BsCart3 className='cursor-pointer text-2xl' onClick={cartHandler}/><span className='text-sm w-5 h-5 mx-auto flex justify-center items-center rounded-full bg-red-500'>{items.length}</span></span>
        </div>
        {cartVisible && <Cart />}
    </div>
  )
}

export default Navbar;
import React from 'react';
import { toast } from 'react-toastify';
import { BsCart3 } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase.config';
import { useSelector, useDispatch } from 'react-redux';
import { clearAuth, toggleCart } from '../store/authSlice';
import Cart from './Cart';

function Navbar() {

    //for logout purpose
    const dispatch = useDispatch();
    const usertoken = useSelector(state => state.auth.token);

    const items = useSelector(state => state.cart);
    const isCartVisible = useSelector(state => state.auth.isCartVisible);

    const handleLogout = async () => {
        try{
            await signOut(auth);
            dispatch(clearAuth());
            localStorage.removeItem('token');  // storing/removing token from localstorage but not using it
            toast.warning("logged out successfully!");
        }catch(err){
            console.error("Signout Error ", err.message);
            toast.error("logged out error!");
        }
    }

  return (
    <div className='w-screen md:w-full mb-5 my-1 py-1 px-5 flex justify-between items-center bg-rgba-dark-90 text-white relative'>
        <div className='w-[30%] font-semibold text-2xl text-[#eee600] font-serif'><Link to={'/'}>ezmart</Link></div>
        <div className='w-[55%] flex justify-between items-center font-semibold'>
            <div className='hidden md:flex w-[60%] ustify-around text-stone-200 text-md font-normal space-x-10'>
                <Link to={'/'} ><span className='hover:text-[#eee600]'>Home</span></Link>
                <Link to={'/products'} ><span className='hover:text-[#eee600]'>Categories</span></Link>
                <span className='hover:text-[#eee600] cursor-pointer'>About</span>
            </div>
            <div className='md:w-[22%] flex justify-end md:justify-around text-2xl text-white'>
                {
                    usertoken !== null ?
                        <span onClick={handleLogout} className='bg-[#eee600] hover:bg-[#ffbf00] text-base text-stone-900 py-[2px] px-2 cursor-pointer rounded font-semibold hidden md:block'>Logout</span> :
                        <Link to={'/auth'}><button className='bg-[#eee600] hover:bg-[#ffbf00] text-base text-stone-900 font-semibold py-[2px] px-2 rounded hidden md:block'>Sign In</button></Link>
                }
                <span className='flex'>
                    <BsCart3 className='cursor-pointer hidden md:block' onClick={() => dispatch(toggleCart())}/>
                    <span className='hidden md:flex text-sm w-4 h-4 mx-auto justify-center items-center rounded-full bg-red-500'>{items.length}</span>
                </span>
            </div>
        </div>
        {/* <div className='block md:hidden'>
            <span className='flex md:hidden'><BsCart3 className='cursor-pointer text-2xl' onClick={cartHandler}/><span className='text-sm w-5 h-5 mx-auto flex justify-center items-center rounded-full bg-red-500'>{items.length}</span></span>
        </div> */}
        {isCartVisible && <Cart />}
    </div>
  )
}

export default Navbar;
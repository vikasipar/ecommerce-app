import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { BsCart3 } from "react-icons/bs";
import { CgMenuLeft, CgClose } from "react-icons/cg";
import { Link, NavLink } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase.config';
import { useSelector, useDispatch } from 'react-redux';
import { clearAuth, toggleCart } from '../store/authSlice';
import Cart from './Cart';

function Navbar() {
    const [isNavVisible, setIsNavVisible] = useState(false);

    //for logout purpose
    const dispatch = useDispatch();
    const usertoken = useSelector(state => state.auth.token);    // useful for fast render after login-logout events because localstorage take time to retrieve values

    const items = useSelector(state => state.cart);
    const isCartVisible = useSelector(state => state.auth.isCartVisible);

    const handleLogout = async () => {
        try{
            await signOut(auth);
            dispatch(clearAuth());
            localStorage.removeItem('token');  // storing/removing token from localstorage but not using it because it rerenders very slow
            toast.warning("logged out successfully!");
        }catch(err){
            console.error("Signout Error ", err.message);
            toast.error("logged out error!");
        }
    }

  return (
    <div className='w-screen md:w-full mb-5 my-1 py-1 px-5 flex justify-between items-center bg-rgba-dark-90 text-white relative'>
        <span className= 'cursor-pointer block sm:hidden' onClick={() => setIsNavVisible(!isNavVisible)}>
            {
                isNavVisible ? 
                    <CgMenuLeft className='text-white font-normal text-2xl' /> :
                    <CgClose className='text-white font-normal text-2xl' />
            }
        </span>
        <div className='w-[44%] text-center sm:text-left sm:w-[35%] font-semibold text-3xl md:text-2xl text-[#eee600] font-serif'><Link to={'/'}>ezmart</Link></div>
        <div className='w-[10%] sm:w-[55%] flex justify-between items-center font-semibold'>
            <div className='hidden sm:flex w-[60%] ustify-around text-stone-200 text-md font-normal space-x-10'>
                <NavLink to={'/'} ><span className='hover:text-[#eeb600]'>Home</span></NavLink>
                <NavLink to={'/products'} ><span className='hover:text-[#eeb600]'>Categories</span></NavLink>
                <span className='hover:text-[#eee600] cursor-pointer'>About</span>
            </div>
            <div className='md:w-[22%] flex justify-end md:justify-around text-2xl text-white'>
                {
                    usertoken !== null ?
                        <span onClick={handleLogout} className='text-base text-[#eee600] cursor-pointer font-semibold hidden sm:block'>Logout</span> :
                        <Link to={'/auth'}><button className='text-base text-[#eee600] font-semibold hidden sm:block'>Sign In</button></Link>
                }
                <span className='flex'>
                    <BsCart3 className='cursor-pointer' onClick={() => dispatch(toggleCart())}/>
                    <span className='flex text-sm w-4 h-4 mx-auto justify-center items-center rounded-full bg-red-500'>{items.length}</span>
                </span>
            </div>
        </div>

        {/* for responsiveness */}
        <div className= {`sm:hidden w-full h-screen bg-stone-800/90 text-stone-200 absolute top-11 left-0 text-center text-xl pt-14 leading-[3] z-10 ${isNavVisible ? 'hidden' : 'block' }`}>
            <NavLink to={'/'} ><div className='hover:text-[#eeb600]' onClick={() => setIsNavVisible(!isNavVisible)}>Home</div></NavLink>
            <NavLink to={'/products'} ><div className='hover:text-[#eeb600]' onClick={() => setIsNavVisible(!isNavVisible)}>Categories</div></NavLink>
            <div className='hover:text-[#eeb600] cursor-pointer'>About</div>
            {
                    usertoken !== null ?
                        <span onClick={handleLogout} className='text-xl text-[#eeb600] cursor-pointer font-semibold'>Logout</span> :
                        <Link to={'/auth'}><button className='text-xl text-[#eeb600] font-semibold'  onClick={() => setIsNavVisible(!isNavVisible)}>Sign In</button></Link>
                }
        </div>
        {/* <div className='block md:hidden'>
            <span className='flex md:hidden'><BsCart3 className='cursor-pointer text-2xl' onClick={cartHandler}/><span className='text-sm w-5 h-5 mx-auto flex justify-center items-center rounded-full bg-red-500'>{items.length}</span></span>
        </div> */}
        {isCartVisible && <Cart />}
    </div>
  )
}

export default Navbar;
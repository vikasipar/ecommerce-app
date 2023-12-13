import React, {useState} from 'react';
import { BsCart3 } from "react-icons/bs";
import { LuUserCircle } from "react-icons/lu";
import { Link } from 'react-router-dom';

function Navbar() {

  return (
    <div className='w-[98%] mx-auto mb-5 my-1 py-1 px-5 flex justify-between items-center bg-stone-700 text-white'>
        <div className='w-[30%] font-semibold text-2xl text-green-400 font-serif'>ezmart</div>
        <div className='w-[55%] flex justify-between items-center font-semibold'>
            <div className='w-[60%] flex justify-around text-stone-300 text-md font-normal'>
                <Link to={'/'} ><span>Home</span></Link>
                <Link to={'/products'} ><span>Categories</span></Link>
                <span>About</span>
            </div>
            <div className='w-[16%] flex justify-around text-2xl'>
                <BsCart3 />
                <LuUserCircle />
            </div>
        </div>
    </div>
  )
}

export default Navbar;
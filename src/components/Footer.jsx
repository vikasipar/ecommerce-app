import React from 'react';

function Footer() {
  return (
    <div className='md:h-60 mt-1 px-4 md:pt-5 md:flex justify-between border-2 bg-stone-800 text-white overflow-hidden'>
        <div className='flex-col md:w-[40%] mx-auto mt-5'>
            <h1 className='text-3xl font-bold my-2 text-[#eee600] font-serif'>ezmart</h1>
            <span>copyright 2023 @vikas_ip</span>
        </div>
        <div className='flex-col md:w-[50%] h-full my-7 space-y-5 mx-auto text-center md:text-justify'>
            <span className='text-xl font-semibold uppercase'>Discover the Extraordinary</span>
            <p className='text-gray-300'>Elevate your style with our curated collection of high-quality products. From fashion to electronics, we bring you the latest trends and innovations.</p>
        </div>
    </div>
  )
}

export default Footer;
import React from 'react';
import { BiSolidOffer } from "react-icons/bi";
import { FaShippingFast } from "react-icons/fa";
import { HiBadgeCheck } from "react-icons/hi";

function Features() {
  return (
    <div className='md:flex justify-center md:justify-around text-center mx-5 my-28 space-y-14 md:space-y-0 md:space-x-28 items-center text-stone-700'>
        <div>
            <div className='text-5xl w-max mx-auto text-[#ffbf00]'><BiSolidOffer /></div>
            <h2 className='text-2xl font-bold'>Season Sale</h2>
            <p className='text-lg text-stone-800'>Don't miss out on this opportunity to snag your favorite handbag at a great price! Shop now while stocks last.</p>
        </div>
        <div>
            <div className='text-5xl w-max mx-auto text-[#ffbf00]'><FaShippingFast /></div>
            <h2 className='text-2xl font-bold'>Free Shipping</h2>
            <p className='text-lg text-stone-800'>We offer free and smooth shipping for all our customers across India. Choose your favorite bag and the shipping fees is on us.</p>
        </div>
        <div>
            <div className='text-5xl w-max mx-auto text-[#ffbf00]'><HiBadgeCheck /></div>
            <h2 className='text-2xl font-bold'>Assured Quality</h2>
            <p className='text-lg text-stone-800'>Each and every bag undergoes rigorous testing and meticulous craftsmanship, ensuring that it meets the highest industry standards.</p>
        </div>
    </div>
  )
}

export default Features;
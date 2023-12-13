import React from 'react';
import { BiSolidOffer } from "react-icons/bi";
import { FaShippingFast } from "react-icons/fa";
import { HiBadgeCheck } from "react-icons/hi";

function Features() {
  return (
    <div className='flex justify-around text-center mx-5 my-9 space-x-28 items-center'>
        <div>
            <div className='text-5xl w-max mx-auto'><BiSolidOffer /></div>
            <h2 className='text-2xl font-bold'>Season Sale</h2>
            <p className='text-lg text-stone-800'>Don't miss out on this opportunity to snag your favorite handbag at a great price! Shop now while stocks last.</p>
        </div>
        <div>
            <div className='text-5xl w-max mx-auto'><FaShippingFast /></div>
            <h2 className='text-2xl font-bold'>Free Shipping</h2>
            <p className='text-lg text-stone-800'>We offer free and smooth shipping for all our customers across India. Choose your favorite bag and the shipping fees is on us.</p>
        </div>
        <div>
            <div className='text-5xl w-max mx-auto'><HiBadgeCheck /></div>
            <h2 className='text-2xl font-bold'>Assured Quality</h2>
            <p className='text-lg text-stone-800'>Each and every bag undergoes rigorous testing and meticulous craftsmanship, ensuring that it meets the highest industry standards.</p>
        </div>
    </div>
  )
}

export default Features;
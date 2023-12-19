import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

function Carousel({children: slides }) {
    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () => {
        setCurrentImage((currentImage) => (currentImage===slides.length-1? 0 : currentImage + 1));
    };

    const prevImage = () => {
        setCurrentImage((currentImage) => (currentImage===0? slides.length-1 : currentImage-1));
    };

    useEffect(() =>{
        const setIntervalId = setInterval(nextImage, 5000);
        return() => clearInterval(setIntervalId);
    },[]);
    

  return (
    <div className='overflow-hidden relative'>
        <div className='flex transition-transform ease-out duration-500' style={{ transform: `translateX(-${currentImage*100}%)` }}>
            {slides}
        </div>
        <div className='absolute z-1 inset-0 flex items-center justify-between p-4'>
            <button onClick={prevImage} className='p-1 rounded-full shadow bg-slate-500 text-white hover:bg-black'>
                <FaArrowLeft />
            </button>
            <button onClick={nextImage} className='p-1 rounded-full shadow bg-slate-500 text-white hover:bg-black'>
                <FaArrowRight />
            </button>
        </div>
    </div>
  )
}

export default Carousel;
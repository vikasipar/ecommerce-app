import React from 'react';

function CardSkeleton() {
  return (
    <div className='w-[250px] h-[400px] flex-column mx-auto my-4 border-slate-300 p-7 rounded-md border-2 animate-pulse'>
        <div className='w-[200px] h-[250px] mx-auto'>
            <div className='w-[98%] h-[95%] bg-slate-300 rounded-md'></div>
        </div>
        <div className='flex-column justify-center'>
            <div className='w-[200px] h-[24px] bg-slate-300 rounded'></div>
            <div className='w-[100px] h-[24px] bg-slate-300 my-2 mx-auto rounded'></div>
            <div className='w-[150px] mx-auto h-[24px] bg-slate-300 rounded-lg'></div>
        </div>
    </div>
  )
}

export default CardSkeleton;
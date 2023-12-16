import React, { useState } from 'react';
import Login from '../components/Login';
import Signup from '../components/Signup';

function UserAuth() {
    const [isUser, setIsUser] = useState(true);
  return (
    <div className='text-center my-[5%] w-screen'>
        <div className='w-max mx-auto px-20 py-9 space-y-14 shadow-2xl bg-white/80 border-2 border-white drop-shadow-2xl'>
            <h1 className='text-3xl font-bold space-x-16 cursor-pointer'>
                <span onClick={() => setIsUser(true)} className={isUser ? 'text-stone-700' : 'text-stone-300'}>Login</span>
                <span onClick={() => setIsUser(false)} className={isUser ? 'text-stone-300' : 'text-stone-700'}>Sign Up</span>
            </h1>
            <div  className='flex justify-center items-center text-center'>
                {isUser ? <Login /> : <Signup />}
            </div>
                {
                isUser ? 
                    <div>Don't have an account?<span onClick={()=>setIsUser(false)} className='cursor-pointer text-blue-600'> Sign up</span></div>
                    :
                    <div>Already have an account?<span onClick={()=>setIsUser(true)} className='cursor-pointer text-blue-600'> Login</span></div>
                }
            </div>
        </div>
    )
}

export default UserAuth;
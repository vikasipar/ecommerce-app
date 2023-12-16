import React from 'react';

function Signup() {
  return (
    <div>
        <form className='space-y-5'>
            <div className='space-y-3'>
                <div className='flex justify-between'>
                    <label htmlFor="name">Name </label>
                    <input type="text" id='name' className='border-2 border-stone-500 rounded' />
                </div>
                <div className='flex justify-between'>
                    <label htmlFor="email">Email </label>
                    <input type="email" id='email' className='border-2 border-stone-500 rounded' />
                </div>
                <div className='flex justify-between'>
                    <label htmlFor="password">Password </label>
                    <input type="password" id='password' className='border-2 border-stone-500 rounded' />
                </div>
                <div className='flex justify-between'>
                    <label htmlFor="cpassword">Confirm Password &nbsp;</label>
                    <input type="password" id='cpassword' className='border-2 border-stone-500 rounded' />
                </div>
            </div>
            <div>
                <button type='submit' className='bg-[#ffbf00] hover:bg-[#ffa500] text-white w-full py-2 px-5 rounded'>Sign up</button>
            </div>
        </form>
    </div>
  )
}

export default Signup;
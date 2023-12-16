import React from 'react';

function Login() {
  return (
    <div>
        <form className='space-y-9 text-left'>
          <div className='space-y-3'>
              <div className='flex justify-between'>
                  <label htmlFor="email" className='w-[90px]'>Email </label>
                  <input type="email" id='email' className='border-2 border-stone-500 rounded' />
              </div>
              <div className='flex justify-between'>
                  <label htmlFor="password" className='w-[90px]'>Password </label>
                  <input type="password" id='password' className='border-2 border-stone-500 rounded' />
              </div>
            </div>
            <div>
              <button type='submit' className='w-full bg-[#ffbf00] hover:bg-[#ffa500] text-white py-2 px-5 rounded'>Log In</button>
            </div>
        </form>
    </div>
  )
}

export default Login;
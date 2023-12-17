import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase.config';
import { useDispatch } from 'react-redux';
import { setAuth } from '../store/authSlice';
import { toast } from 'react-toastify';

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();

    try{
      const credentials = await signInWithEmailAndPassword(auth, email, password);
      const user = credentials.user;
      dispatch(setAuth(user.accessToken));
      localStorage.setItem('token', user.accessToken);   // localstorage
      toast.success("logged in successfully!");
      navigate('/products');
    }catch(err){
      toast.error("Login Error!");
    }
  }

  return (
    <div>
        <form onSubmit={handleLogin} className='space-y-9 text-left'>
          <div className='space-y-3'>
              <div className='flex justify-between'>
                  <label htmlFor="email" className='w-[90px]'>Email </label>
                  <input type="email" id='email' className='px-2 py-1 text-lg border-2 border-stone-500 rounded' onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className='flex justify-between'>
                  <label htmlFor="password" className='w-[90px]'>Password </label>
                  <input type="password" id='password' className='px-2 py-1 text-lg border-2 border-stone-500 rounded' onChange={(e) => setPassword(e.target.value)} />
              </div>
            </div>
            <div>
              <button type='button' onClick={handleLogin} className='w-full bg-[#ffbf00] hover:bg-[#ffa500] text-stone-900 font-semibold text-lg py-2 px-5 rounded'>Log In</button>
            </div>
        </form>
    </div>
  )
}

export default Login;
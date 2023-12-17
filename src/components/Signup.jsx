import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase.config';
import { useDispatch } from 'react-redux';
import { setAuth } from '../store/authSlice';
import { toast } from 'react-toastify';

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSignup = async (e) => {
        e.preventDefault();

        if(password !== cpassword){
            console.log("Password not match");
            return;
        }

        try{
            const credentials = await createUserWithEmailAndPassword(auth, email, password);
            const user = credentials.user;
            dispatch(setAuth(user.accessToken));
            localStorage.setItem('token', user.accessToken);   // localstorage
            toast.success("account created successfully!");
            navigate('/products');
        }catch(err){
            toast.error("Signup Error!");
        }
    };

  return (
    <div>
        <form onSubmit={handleSignup} className='space-y-5'>
            <div className='space-y-3'>
                <div className='flex justify-between'>
                    <label htmlFor="email">Email </label>
                    <input type="email" id='email' className='px-2 py-1 text-lg border-2 border-stone-500 rounded' onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className='flex justify-between'>
                    <label htmlFor="password">Password </label>
                    <input type="password" id='password' className='px-2 py-1 text-lg border-2 border-stone-500 rounded' onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div className='flex justify-between'>
                    <label htmlFor="cpassword">Confirm Password &nbsp;</label>
                    <input type="password" id='cpassword' className='px-2 py-1 text-lg border-2 border-stone-500 rounded' onChange={(e) => setCpassword(e.target.value)} required />
                </div>
            </div>
            <div>
                <button type='submit' className='bg-[#ffbf00] hover:bg-[#ffa500] text-stone-900 font-semibold text-lg w-full py-2 px-5 rounded'>Sign up</button>
            </div>
        </form>
    </div>
  )
}

export default Signup;

import { useDispatch, useSelector } from 'react-redux';
import Header from './Header'
import React, { useRef, useState } from 'react'
import { userStatus } from '../utils/userSlice';

const Login = () => {
    const [isSignin,setSignin]= useState(true);
    const dispath = useDispatch();
    const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const isMenuOpen = useSelector((store)=>store.user.islogin);
  console.log(isMenuOpen);

  const toggleIt = ()=>{
    setSignin(!isSignin);

 
  }
    if(isMenuOpen) return
    

    return (
       <div>
          <Header/>
        
        <div className='absolute'>
         <img className='h-screen w-[1600px] object-cover' src="https://img.freepik.com/premium-photo/a-shot-sewing-item-orange-table_1048944-5635666.jpg" alt='hi'/>
         </div>
         <form onSubmit={(e)=>e.preventDefault()} className='rounded-lg w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
         <h1 className='text-white font-3xl py-2 font-bold'>{isSignin ? "Sign In" : "Sign Up"}</h1>
         <input  type='text' placeholder='Email' className='px-4 py-2 my-2 w-full rounded-sm bg-gray-700'></input>
         
         { (<input ref={name} type='text' placeholder='name' className='px-4 py-2 my-2 w-full rounded-sm bg-gray-700'></input>)}
         
         
          
          <input  type='password' placeholder='password' className='px-4 py-2   my-2 w-full rounded-sm bg-gray-700'></input>
          <p className='text-red-700'>error</p>
          <button  className='px-4 py-3 my-2 bg-red-800  w-full rounded-sm'>{isSignin ? "Sign In" : "Sign Up"}</button>
          <p className='p-4 cursor-pointer' onClick={()=>toggleIt()} >{isSignin ? "New User? Sign Up" : "Already User? Sign In"}</p>
        </form>
        </div>
        
        
      )
}

export default Login
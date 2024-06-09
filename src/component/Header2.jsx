import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { userStatus } from '../utils/userSlice';
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase.js"
import { useNavigate } from 'react-router-dom';



const Header2 = () => {
    
    const user =useSelector((store)=>store.login)
    const navigate = useNavigate()
  const HandleSignout = ()=>{
    
signOut(auth).then(() => {
    navigate("/")
}).catch((error) => {
  // An error happened.
});
  }
  console.log(user);
    return (
        <div className='w-screen absolute px-5 py-2 bg-slate-800 flex justify-between flex-col md:flex-row'>
        <img className='w-12 mx-auto md:mx-0 rounded-full hover:w-14' src="https://img.freepik.com/free-vector/fashion-repair-service-logo-design_23-2150253051.jpg" alt='none'/>
       <div className='flex'>
        <p className='text-white'>{user?.displayName}</p>
        <img className='w-8 p-1 m-1 rounded-full bg-transparent' src="https://i.pinimg.com/736x/21/20/b0/2120b058cb9946e36306778243eadae5.jpg" alt='img'/>
        <p>Name</p>
        <button className='text-white bg-slate-400 p-1 rounded-lg mx-5' onClick={HandleSignout} >Sign Out</button>
        </div>
        
         </div>)}
          


export default Header2
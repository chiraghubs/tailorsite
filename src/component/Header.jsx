import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { userStatus } from '../utils/userSlice';


const Header = () => {
    const [issignin,setsignin]= useState(true);
    const dispath = useDispatch();

    const toggleIt = ()=>{
        setsignin(!issignin);
    
      dispath(userStatus())
      }
    return (
        <div className='w-screen absolute px-5 py-2 bg-slate-800 z-10 flex justify-between flex-col md:flex-row'>
        <img className='w-12 mx-auto md:mx-0 rounded-full hover:w-14' src="https://img.freepik.com/free-vector/fashion-repair-service-logo-design_23-2150253051.jpg" alt='none'/>
        <button className='text-white bg-slate-400 p-1 rounded-lg mx-5' onClick={()=>{toggleIt()}}>{issignin ? "Login" :"LogOut"}</button>
        
        
         </div>)}
          


export default Header
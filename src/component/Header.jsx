import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { userStatus } from '../utils/userSlice';
import { auth } from "../utils/firebase.js"
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { addUser, removeUser } from '../utils/userLoginSlice';


const Header = () => {
    const [issignin,setsignin]= useState(true);
    const dispath = useDispatch();
    const user =useSelector((store)=>store.login);
    const navigate = useNavigate();

    useEffect(()=>{
     const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          
          const {uid,email,displayName} = user;
          dispath(addUser({uid:uid,email:email,displayName:displayName}));
          navigate("/brows")
        } else {
          dispath(removeUser());
         navigate("/")
        }
      });

      return ()=> unsubscribe();
    },[])

    const HandleSignout = ()=>{
    
      signOut(auth).then(() => {
          
      }).catch((error) => {
        
      });
        }
    const toggleIt = ()=>{
        setsignin(!issignin);
    
      dispath(userStatus())
      }
    return (
        <div className='w-screen  px-5 py-2 bg-slate-800 flex justify-between'>
        <img className='w-12 mx-auto md:mx-0 rounded-full hover:w-14' src="https://img.freepik.com/free-vector/fashion-repair-service-logo-design_23-2150253051.jpg" alt='none'/>
        {!user && <button className='text-white bg-slate-400 p-1 rounded-lg mx-5' onClick={()=>{toggleIt()}}>{issignin ? "Login" :"LogOut"}</button>}
        
        {user &&         <button className='text-white bg-slate-400 p-1 rounded-lg mx-5' onClick={HandleSignout} >Sign Out</button>
      }
         </div>)}
          


export default Header
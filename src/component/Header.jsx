import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { userStatus } from '../utils/userSlice';
import { auth } from "../utils/firebase.js"
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { addUser, removeUser } from '../utils/userLoginSlice';
import { clearcart, removeitem } from '../utils/cartSlice.jsx';
import { Link } from 'react-router-dom';


const Header = () => {
    const [issignin,setsignin]= useState(true);
    const dispath = useDispatch();
    const user =useSelector((store)=>store.login);
    const navigate = useNavigate();
    const cart =useSelector((store)=>store.cart.item)
    // console.log(cart.item);

    useEffect(()=>{
     const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          
          const {uid,email,displayName} = user;
          dispath(addUser({uid:uid,email:email,displayName:displayName}));
          // navigate("/brows")
          
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
      const clearcarts = ()=>{
        dispath(clearcart())
      }
    return (
        <div className='w-screen  px-5 py-2 bg-slate-800 flex justify-between'>
        <img className='w-12 mx-auto md:mx-0 rounded-full hover:w-14' src="https://img.freepik.com/free-vector/fashion-repair-service-logo-design_23-2150253051.jpg" alt='none'/>
        <div className=' flex m-2'>
          {user &&<p className='text-white mx-2'><Link to="/brows">Home</Link></p>}
          {user &&<p className='text-white mx-2'><Link to="/cart">Cart: {cart.length}</Link></p>}
          {user &&<button className='bg-red-500 rounded-lg p-1' onClick={()=>clearcarts()}>Clear</button>}
        {!user && <button className='text-white bg-slate-400 p-1 rounded-lg mx-5' onClick={()=>{toggleIt()}}>{issignin ? "Login" :"LogOut"}</button>}
        
        {user &&         <button className='text-white bg-slate-400 p-1 rounded-lg mx-5' onClick={HandleSignout} >Sign Out</button>
      }
      </div>
         </div>)}
          


export default Header
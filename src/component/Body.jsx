import React, { useEffect } from 'react'
import Header from './Header'
import Login from './Login'
import { RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom'
import Brows from './Brows';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userLoginSlice';

const Body = () => {
  const dispath = useDispatch();
 
  const appRouter = createBrowserRouter([
    {
      path:"/",
      element:<><Header/><Login/></>
    },
    {
      path:"/brows",
      element:<Brows/>
    }
  ])

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        
        const {uid,email,displayName} = user;
        dispath(addUser({uid:uid,email:email,displayName:displayName}));
        
      } else {
        dispath(removeUser());
       
      }
    });
  },[])

  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
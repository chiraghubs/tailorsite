
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header'
import React, { useRef, useState } from 'react'
import { userStatus } from '../utils/userSlice';
import { checkValidData } from '../utils/validate';
import { updateProfile , createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase.js"
import { useNavigate } from 'react-router-dom';
import { addUser } from '../utils/userLoginSlice.js';
import ShoppingCards from './ShoppingCards.jsx';

const Login = () => {
    const [isSignin,setSignin]= useState(true);
    const [errormsg,seterrormsg] = useState(null)
    const navigate = useNavigate()
    const dispath = useDispatch();
    const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  // console.log(isSignin);

  const Handlebutton = ()=>{
    //validate form
    if(isSignin){
      console.log("here");
      console.log(name.current.value);
      const message = checkValidData(email.current.value,password.current.value,name.current.value);
    }
      // console.log(password.current.value);
      const message = checkValidData(email.current.value,password.current.value);
    console.log(message);
    seterrormsg(message)
    if(message) return;
    
    if(isSignin){
      console.log("sign up");
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    updateProfile(user, {
  displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
}).then(() => {
  const {uid,email,displayName} = auth.currentUser;
        dispath(addUser({uid:uid,email:email,displayName:displayName}));
  
}).catch((error) => {
  seterrormsg(error.message)
});
  
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrormsg(errorCode+errorMessage)
  });
    }
    else{
      
signInWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    navigate("/brows")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrormsg(errorMessage)
  });
    }

  }

  const isMenuOpen = useSelector((store)=>store.user.islogin);
  // console.log(isMenuOpen);

  const toggleIt = ()=>{
    setSignin(!isSignin);

 
  }
  console.log(isMenuOpen);
    if(!isMenuOpen){return (
      
      <div>
       <div className='absolute mt-2'>
        <img className='h-screen w-[1600px] object-cover' src="https://images.tailorstore.com/YToxOntzOjU6IndpZHRoIjtpOjE5MjA7fQ%3D%3D/images%252Fcms%252Fmajor-summer-2024-2.jpg" alt='hi'/>
        <h1 className='absolute top-72 left-36 text-4xl'>TAILORED FOR YOU, PRICED  </h1>
    <h1 className='absolute top-[22rem] left-36 text-4xl'>FOR EVERYONE </h1>
        </div>
        <form onSubmit={(e)=>e.preventDefault()} className='rounded-lg w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
        <h1 className='text-white font-3xl py-2 font-bold'>{isSignin ? "Sign In" : "Sign Up"}</h1>
        <input ref={email}  type='text' placeholder='Email' className='px-4 py-2 my-2 w-full rounded-sm bg-gray-700'></input>
        
        {isSignin && (<input ref={name} type='text' placeholder='name' className='px-4 py-2 my-2 w-full rounded-sm bg-gray-700'></input>)}
        
        
         
         <input ref={password}  type='password' placeholder='password' className='px-4 py-2   my-2 w-full rounded-sm bg-gray-700'></input>
         <p className='text-red-700'>{errormsg}</p>
         <button  className='px-4 py-3 my-2 bg-red-800 hover:bg-red-600  w-full rounded-sm' onClick={Handlebutton}>{isSignin ? "Sign In" : "Sign Up"}</button>
         <p className='p-4 cursor-pointer' onClick={()=>toggleIt()} >{isSignin ? "Already User? Sign In" : "New User? Sign Up"}</p>
       </form>
       </div>
       
       
       
     )
}
else{return (
      
  <div>
   <div className='absolute mt-2 '>
    <img className='h-screen w-[1600px] object-cover' src="https://images.tailorstore.com/YToxOntzOjU6IndpZHRoIjtpOjE5MjA7fQ%3D%3D/images%252Fcms%252Fmajor-summer-2024-2.jpg" alt='hi'/>
    <h1 className='absolute top-72 left-36 text-4xl'>TAILORED FOR YOU, PRICED  </h1>
    <h1 className='absolute top-[22rem] left-36 text-4xl'>FOR EVERYONE </h1>
    </div>
   </div>
  
 )
}
}

   

export default Login
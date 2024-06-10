import React from 'react'
import { useDispatch } from 'react-redux'
import { additem, decreaseitem, removeitem } from '../utils/cartSlice';

const CartList = ({name,imgurl,price,id,cartQuantity}) => {
const dispath =useDispatch();
const handleadd = ()=>{
  console.log(id);
  dispath(additem({name,imgurl,price,id}))}
  const handleremove = (id)=>{
    console.log(id);
    // alert(id + " Item is removed")
    dispath(removeitem({name,imgurl,price,id}))}

    const handleDecrease = ()=>{
      dispath(decreaseitem({name,imgurl,price,id}))
    }

  return (
    <div className='w-[800px] ml-72 mt-5 flex h-[15rem]  bg-red-200  rounded-lg'>
      <img src={imgurl} className='p-1 rounded-lg' ></img>
      <div className='flex flex-col mt-11 ml-11'>
      <p className=''>{name}</p>
      <p className=''>{price+" rss"}</p>
      <p className=''>{id}</p>
      <p className=''>{"Qty:-"+cartQuantity}</p>
      <button onClick={()=>handleDecrease(imgurl,name,price,id)} className='rounded-full flex flex-row absolute mt-[4.5rem] ml-20  w-4 bg-red-400'>-</button>
      <button onClick={()=>handleadd(imgurl,name,price,id)} className='rounded-full flex flex-row absolute mt-[4.5rem] ml-2  w-4 bg-green-400'>+</button>
      <button  onClick={()=>handleadd(imgurl,name,price,id)} className='bg-green-500 p-1 m-1 rounded-lg hover:bg-green-400'>Add</button>
      <button  onClick={()=>handleremove(id,imgurl,name,price)} className='bg-red-500 p-1 m-1 rounded-lg hover:bg-red-400'>Remove</button>
      </div>
    </div>
  )
}

export default CartList

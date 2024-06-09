import React from 'react'
import { useDispatch } from 'react-redux'
import { additem, removeitem } from '../utils/cartSlice';

const CartList = ({imgurl,name,price}) => {
const dispath =useDispatch();
const handleadd = ()=>{
  console.log(imgurl,name,price);
  dispath(additem({name,price,imgurl}))}
  const handleremove = ()=>{
    console.log(imgurl,name,price);
    dispath(removeitem({name,price,imgurl}))}
  return (
    <div className='w-[800px] ml-72 mt-5 flex h-52  bg-red-200  rounded-lg'>
      <img src={imgurl} className='p-1 rounded-lg' ></img>
      <div className='flex flex-col mt-11 ml-11'>
      <p className=''>{name}</p>
      <p className=''>{price+" rss"}</p>
      <button  onClick={()=>handleadd(imgurl,name,price)} className='bg-green-500 p-1 m-1 rounded-lg hover:bg-green-400'>Add+</button>
      <button  onClick={()=>handleremove(imgurl,name,price)} className='bg-red-500 p-1 m-1 rounded-lg hover:bg-red-400'>Remove+</button>
      </div>
    </div>
  )
}

export default CartList

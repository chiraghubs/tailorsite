import React from 'react'
import { MenuList } from '../utils/DemlStore'
import { useDispatch } from 'react-redux'
import { additem } from '../utils/cartSlice';

const ShoppingCards = ({imgurl,name,price}) => {
const dispath =useDispatch();
const handleadd = ()=>{
  console.log(imgurl,name,price);
  dispath(additem({name,price,imgurl}))
}
  return (
    <div className='h-96 mt-5 ml-2 bg-red-200 w-60 rounded-lg'>
      <img src={imgurl} className='p-1 rounded-lg' ></img>
      <p className=''>{name}</p>
      <p className=''>{price+" rss"}</p>
      <button onClick={()=>handleadd(imgurl,name,price)} className='bg-green-500 p-1 m-1 rounded-lg'>Add+</button>
    </div>
  )
}

export default ShoppingCards

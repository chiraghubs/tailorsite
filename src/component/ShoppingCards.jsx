import React from 'react'
import { MenuList } from '../utils/DemlStore'

const ShoppingCards = ({imgurl,name,price}) => {
  return (
    <div className='h-96 mt-5 ml-2 bg-red-200 w-60 rounded-lg'>
      <img src={imgurl} className='p-1 rounded-lg' ></img>
      <p className=''>{name}</p>
      <p className=''>{price+" rss"}</p>
    </div>
  )
}

export default ShoppingCards

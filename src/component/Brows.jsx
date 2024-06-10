import React from 'react'

import ShoppingCards from './ShoppingCards'
import Header from './Header'
import { MenuList } from '../utils/DemlStore'


const Brows = () => {
  return (
   <div>
    <Header/>
    <div className=' flex flex-wrap p-4'>{MenuList.map((x,index)=>(<ShoppingCards key={index} name={x.name} imgurl={x.imgurl} price={x.price} id={x.id}/>))} </div>
   </div>
  )
}

export default Brows
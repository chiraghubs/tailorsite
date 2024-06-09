import React from 'react'

import ShoppingCards from './ShoppingCards'
import Header from './Header'
import { MenuList } from '../utils/DemlStore'


const Brows = () => {
  return (
   <div>
    <Header/>
    <div className=' flex flex-wrap p-4'>{MenuList.map((x)=>(<ShoppingCards key={x.id} name={x.name} imgurl={x.imgurl} price={x.price}/>))} </div>
   </div>
  )
}

export default Brows
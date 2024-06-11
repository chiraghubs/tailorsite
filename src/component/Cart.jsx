import React from 'react'
import Header from './Header'
import { useSelector } from 'react-redux'
import ShoppingCards from './ShoppingCards'
import { Link } from 'react-router-dom'
import CartList from './CartList'

const Cart = () => {
    const cart =useSelector((store)=>store.cart)
    console.log(cart.item);
    
    if(cart.item.length==0) {return(<div>
        <Header/>
        
        <div className='text-center m-2 p-2'>
          <h1>Cart</h1>
          <img className='mx-[30rem] mt-10 w-96' src="https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg"></img>
          <p className='mt-10'>Your Cart is empty
          Shop today’s deals</p>
          <button  className='bg-yellow-300 p-2 rounded-lg hover:bg-yellow-200 mt-2'><Link to="/brows">Shop Now</Link></button>
        </div>
      </div>)}
  else {return(
    <div><Header/>
    <div className='text-center m-2 p-2'>
    <div className='flex ml-[38rem]'>
    <h1 className='text-3xl'>Cart</h1>
    <h1 className='text-3xl ml-10'>Total:{cart.item.reduce((acc,cur)=>acc + cur.price*cur.cartQuantity,0)} rs</h1>
    </div>
    <div className=' p-2'>{cart.item.map((x,index)=>(<CartList key={index} name={x.name} imgurl={x.imgurl} price={x.price} id={x.id} cartQuantity={x.cartQuantity}/>))} </div>
    </div>
    </div>
      
  )}
}

export default Cart

'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import {  BiShoppingBag } from 'react-icons/bi';
import useCart from '../context/use-cart';
import CartItem from './CartItem';
import { GrClose } from 'react-icons/gr';

const Navbar = () => {
  const [showMenu,setShowMenu] = useState(false)
  const [mounted ,setMounted] = useState(false)
  const items = useCart((state) => state.items);
 

const cart = useCart()
const totalPrice = items.reduce((total, item) => {
  return total + Number(item.price)
}, 0);




  return (
    <div  className='mx-auto   flex flex-col' > 
      <div  className='w-full bg-navbar  h-10 border-b-2 flex justify-center items-center border-navbar'>
<h3  className='text-green text-md font-bold ' >FREE SHIPPING ON ORDERS OVER $75</h3>
        </div> 
    <div  className='w-full  mx-auto   h-110 n border-b-2 border-navbar py-10 ' >
      <div  className=' max-w-7xl md:mx-auto mx-5 flex flex-row  justify-between items-center' >
      <div  className='flex justify-between items-center ' >
      <Link href='/' className='' >

      <h1 className='text-green text-3xl font-bold pr-12 cursor-pointer ' > <span className='mt-5'>° </span>pure flave</h1>
      </Link>
  

      <ul   className=' justify-between  gap-3 text-xl font-md  hidden cursor-pointer md:block ' >
        <Link href='/shop' className='pr-4  hover:text-green ' >Shop</Link>
        <Link href='/subscription'  className='pr-4  hover:text-green' >Subscription</Link>
        <Link href='/about'  className='pr-4  hover:text-green ' >About Us</Link>
        <Link href='/contact'  className='pr-4 hover:text-green' >Contact</Link>
      </ul>
        </div>
     


      <div  className='text-green relative  cursor-pointer  ' onClick={()=>setMounted(true)}>

      < BiShoppingBag size={40} />
      <span className='h-2 w-2 absolute top-3 left-4 text-black ' >
        {cart.items.length}
      </span>

  
    </div>








    <div className='w-6 h-6 flex flex-col justify-center   gap-y-2 cursor-pointer  md:hidden  ' onClick={()=>setShowMenu(true)} >
      <span  className='h-2  bg-green flex flex-col ' ></span>
      <span  className='h-2  bg-green  ' ></span>
      <span  className='h-2   bg-green  ' ></span>

    </div>
  



      </div>
   
   
    </div>
    {
      showMenu && (
        <div  className='fixed h-full w-full z-10  bg-bgfooter md:hidden 'onClick={()=>setShowMenu(false)}  >
          <div className='flex flex-row justify-between mx-5 my-5 text-green  cursor-pointer' >
            <GrClose  size={33} onClick={()=>setShowMenu(false)}/>


          </div>
          <hr className='bg-green h-0.5' />
          <div className='flex flex-col mx-5 ' >
            
      <ul   className='flex flex-col justify-between mx-10 mt-10 gap-y-10 text-2xl font-semibold      ' >
        <Link href='/shop' className='pr-4 text-green hover:text-green cursor-pointer' >Shop</Link>
        <Link href='/subscription'  className='pr-4 text-green hover:text-green cursor-pointer' >Subscription</Link>
        <Link href='/about'  className='pr-4 text-green hover:text-green cursor-pointer' >About Us</Link>
        <Link href='/contact'  className='pr-4 text-green hover:text-green cursor-pointer' >Contact</Link>
      </ul>
          </div>

        </div>

      )
    }
    {
      mounted && (
        <div className='fixed md:w-[30%] w-[70%]  right-0 top-0 z-10 transition-2xl  h-auto bg-white' >
          <div className='flex flex-col justify-between' >
     <div className='flex justify-around flex-row    px-5 py-10 bg-bgfooter'>
            <GrClose  size={33} onClick={()=>setMounted(false)}  className='text-green  cursor-pointer' />
            <h1 className='text-3xl text-green font-bold ' >Cart</h1>
            </div>
            <div className='flex  min-h-[70vh]   max-h-[70vh]  overflow-x-hidden' >
            {cart.items.length === 0 &&  <p  className='text-black font-bold flex w-full h-[60vh] items-center justify-center text-2xl' >No  items added to cart</p>}
          <ul  >{cart.items.map((item)=> (
                    <CartItem  key={item.id}  data={item}  />
                ))}</ul>



            </div>
{
  cart.items.length > 0 && (
    
  <>
    <div className='w-[800px]     px-5 py-1 '>
                    <h1 className='text-3xl'>Subtotal</h1>
                    <h1 className='text-3xl'>${totalPrice}</h1>

                  </div><hr className='mb-4 bg-green h-0.5' /><div className='flex  bottom-0 h-full justify-center flex-col mb-10'>

                      <Link href='/cart'>
                        <button className='mx-10  py-4 bg-green  font-bold rounded-2xl w-[80%] text-white font-2xl' onClick={() => setMounted(false)}>View Cart</button>
                      </Link>
                    </div>
                    </>
)

}
     


       
            

          </div>
       
          

        </div>

      )
    }
    

    

      </div>
  )
}

export default Navbar
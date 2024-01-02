'use client'
import React, { useEffect } from 'react'
import useCart from '../../../context/use-cart'
import CartItem from '../../../components/CartItem'
import { BsFillLockFill } from 'react-icons/bs'
import { toast } from 'react-hot-toast'
import axios from 'axios'
import { useRouter, useSearchParams } from 'next/navigation'

const PageCart = () => {
    const cart = useCart()
    const searchParams = useSearchParams();
    const items = useCart((state) => state.items);
    const removeAll = useCart((state) => state.removeAll);

    const totalPrice = items.reduce((total, item) => {
      return total + item.price * item.quantity;
  }, 0);


      const route = useRouter()
      useEffect(() => {
        if (searchParams.get('success')) {
          toast.success('Payment completed.');
          removeAll();
        }
    
        if (searchParams.get('canceled')) {
          toast.error('Something went wrong.');
        }
      }, [searchParams, removeAll]);





      const onCheckout = async () => {
      //   const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
      //     productIds: items.map((item) => item.id)
      //   });
    
      //   window.location = response.data.url;

        route.push('https://wa.me/0694977110')

       }
    

      if(cart.items.length === 0) {
route.push('/shop')
        
      }



  return (

    <div  className='md:mx-auto mx-4  max-w-7xl h-full justify-center items-center' >
        <div  className='flex md:flex-row  flex-col  py-10 md:gap-10  gap-0 ' >
            <div className='flex flex-col w-full h-auto'>
            <h1 className='text-green text-3xl py-5'  >My cart</h1>
            <hr className=' h-0.5 bg-green'  />
           
            <div  className='flex flex-row ' >
            <ul className='h-auto' >{cart.items.map((item)=> (
                    <CartItem  key={item.id}  data={item}  />
                   
                ))}</ul>
                 

            </div>
            
            </div>
            <div className='flex flex-col md:w-[50%] w-full '>
                <h1 className='text-green text-3xl  py-5'>Order summary</h1>
                <hr className=' h-0.5 bg-green '  />
                <div className='flex flex-row justify-between px-10 py-10 '> 
                    <h1 className='text-green text-2xl '>Total</h1>
                    <h1 className='text-black text-2xl '>${totalPrice}.00</h1>
                    
                   
                </div>
                <button className='bg-green text-white rounded-3xl px-1 font-bold text-2xl py-2' onClick={onCheckout} > Checkout</button>
                <h1  className='text-black font-black text-xl justify-center items-center gap-x-5 py-5 flex flex-row' ><BsFillLockFill/>     Secure Checkout</h1>


            </div>
        </div>

    </div>
  )
}
export default PageCart



import Image from 'next/image'
import React, { useState } from 'react'
import { Product } from '../types'
import useCart from '../context/use-cart'
import { GrClose } from 'react-icons/gr'
import Link from 'next/link'



interface CartItemProps {
    data : Product
   

}

const CartItem:React.FC<CartItemProps> = ({data}) => {


 

    const cart = useCart()
    const onRemove = () => {
        cart.removeItem(data.id)
    }

    

    
   
  


  return (
    <li className=' mt-10' >
  
            <div  className=" flex flex-col justify-between    sm:ml-6 py-5 md:px-20 px-0 rounded-2xl w-full h-full" >
     
        

       <div  className='flex flex-row md:gap-5  justify-between h-auto ' >
      <div  className='md:w-[104px]  w-[55px]  md:h-[54px] h-[40px] ' >
      <Image src={data.images[0].url}  width={104} height={54}  alt='image ' className='object-cover object-centre   ' />
      </div>
   
       
         
                
      
            <div className=' flex text-sm  flex-col  ' >
                <h1  className='text-2xl ' >{data.name}</h1>
            <h1  className='text-bold text-green text-2xl' >   ${ data.price}</h1>
          <div   className='flex flex-row w-40 ' >
          <button  className='border-2  px-2 py-2'  onClick={() => cart.incrementQuantity(data.id)}>+</button>
                    <input  className='border-2  w-10 ' 
                        type="number"
                        value={data.quantity}
                        onChange={(e) => cart.editQuantity(data.id, parseInt(e.target.value))}
                    />
                    <button className='border-2 px-2 py-2' onClick={() => cart.decrementQuantity(data.id)}>-</button>
          </div>
        
       
           



            </div>

            <GrClose  size={33} onClick={onRemove} className='  text-green  cursor-pointer   ' />
            </div>
            
         
         

       
      </div>
    

    </li>
  )
}

export default CartItem



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
    <li className=' mt-0 w-[100%]  ' >
  
            <div  className=" flex flex-col py-4 md:px-5 px-1 rounded-2xl   " >
        

       <div  className='flex justify-around  mt-5   w-auto ' >
    
       <div  className='md:w-[104px]  w-[55px]  md:h-[54px] h-[40px] ' >
      <Image src={data.images[0].url}  width={104} height={54}  alt='image ' className='object-cover object-centre   ' />
      </div>
        
       
         
                
      
            <div className=' flex text-sm  flex-col mx-3  ' >
 


                <h1  className='md:text-2xl  text-md ' >{data.name}</h1>
            <h1  className='text-bold text-green  md:text-2xl  text-md  ' > <span  className='text-bold text-black  ' >Price</span>  ${ data.price}</h1>
          <div   className='flex flex-row md:w-40 w-20  ' >
          <button  className='border-2  px-1 py-1   md:px-2 md:py-2'  onClick={() => cart.incrementQuantity(data.id)}>+</button>
                    <input  className='border-2  md:w-10 w-5 ' 
                        type="number"
                        min="1" // Minimum value is 1
                        value={data.quantity}
                        onChange={(e) => cart.editQuantity(data.id, parseInt(e.target.value))}
                    />
                    <button className='border-2 px-1 py-1   md:px-2 md:py-2' onClick={() => cart.decrementQuantity(data.id)}>-</button>
          </div>
        
       
           



            </div>
<GrClose  size={25} onClick={onRemove} className='  text-green  cursor-pointer   ' />
            </div>
            
         
         
            

       
      </div>
    

    </li>
  )
}

export default CartItem
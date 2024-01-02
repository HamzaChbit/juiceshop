"use client" 
import React, { useState } from 'react'
import { Product } from '../types'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import useCart from '../context/use-cart'
import Link from 'next/link'
interface ProductCardProps {
  data : Product
  
}



const ProductCard:React.FC<ProductCardProps> = ({data}) => {
  const [quantity, setQuantity] = useState(1);
  
  const router = useRouter()
  const handelClick = () => {
    router.push(`/shop/${data?.id}`)
  
  } 
  const cart = useCart()


  const handleAddToCart = () => {
    cart.addItem(data, quantity);
    // Reset quantity after adding to cart
    setQuantity(1);
};


  

  

  return (
    <div   >
        <div className='flex flex-col py-5  cursor-pointer  ' onClick={handelClick} >
   <Image src={data.images[0]?.url} width={650} height={450} alt='image' />
  
   
   </div>
 <div className='flex flex-col  py-8 justify-between  px-6 md:flex-row ' >
  
    <h1 className=' font-bold  text-md  md:text-2xl  text-green' > {data.name}</h1>
   <h1  className='text-xl py-3 md:py-0 ' >${data.price}</h1>
  
   
  
     <button className='  py-2 w-auto bg-green  font-bold rounded-2xl px-0 text-white md:px-10    ' onClick={handleAddToCart} > Add to Cart</button>

                     
   </div>



    </div>
 
  )
}

export default ProductCard
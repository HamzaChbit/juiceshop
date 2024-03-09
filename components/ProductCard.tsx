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
    <div  className=' flex justify-center mx-5 items-center  flex-col ' >
        <div className='flex flex-col py-5  cursor-pointer  ' onClick={handelClick} >
   <Image src={data.images[0]?.url} width={450} height={200} alt='image' />
  
   
   </div>
 <div className='flex flex-col  items-center    ' >
  <div  className='flex md:flex-row flex-col md:my-2 my-1  items-center  justify-between w-full' >
    <h1 className=' font-bold  text-md  md:text-2xl  text-green' > {data.name}</h1>
   <h1  className='text-xl py-2   md:py-0 ' >${data.price}</h1>
  
  </div>
    
   
  
     <button className='  md:py-2 py-1  md:w-[250px] w-[200] mx-2 px-2 bg-green  md:font-bold font-medium rounded-2xl  text-white     ' onClick={handleAddToCart} > Add to Cart</button>

                     
   </div>



    </div>
 
  )
}

export default ProductCard
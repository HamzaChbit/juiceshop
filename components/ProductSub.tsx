"use client" 
import React, { useState } from 'react'
import { Product } from '../types'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import useCart from '../context/use-cart'
interface ProductCardProps {
  data : Product
  
}



const ProductSub:React.FC<ProductCardProps> = ({data}) => {

  const [quantity, setQuantity] = useState(1);
  const router = useRouter()
  const handelClick = () => {
    router.push(`/subscription/${data?.id}`)
  } 

  const cart = useCart()


  const handleAddToCart = () => {
    cart.addItem(data, quantity);
    // Reset quantity after adding to cart
    setQuantity(1);
};

  return (
    <div>
       <div className='flex flex-col py-5  cursor-pointer  ' onClick={handelClick} >
   <Image src={data.images[0]?.url} width={650} height={450} alt='image' />
      </div>


      <div className='flex   justify-between  px-6 flex-col' >
        <div  className='flex col justify-between ' >

<h1 className='text-bold font-bold text-2xl text-green' > {data.name}</h1>
   <h1  className='text-xl  ' >${data.price}</h1>

        </div>
   
   <button className=' mt-2 py-2 w-auto bg-green  font-bold rounded-2xl px-0 text-white md:px-10    ' onClick={handleAddToCart} > Add to Cart</button>

   
   </div>
    </div>
  
  )
}

export default ProductSub
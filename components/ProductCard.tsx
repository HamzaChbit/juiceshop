"use client" 
import React from 'react'
import { Product } from '../types'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
interface ProductCardProps {
  data : Product
  
}



const ProductCard:React.FC<ProductCardProps> = ({data}) => {


  const router = useRouter()
  const handelClick = () => {
    router.push(`/shop/${data?.id}`)
  
  } 
  

  return (
   <div className='flex flex-col py-5  cursor-pointer  ' onClick={handelClick} >
   <Image src={data.images[0]?.url} width={650} height={450} alt='image' />
   <div className='flex flex-col py-8  px-6' >
   <h1 className='text-bold font-bold text-2xl text-green' > {data.name}</h1>
   <h1  className='text-xl py-3 ' >${data.price}</h1>
   </div>
   
   </div>
  )
}

export default ProductCard
'use client'
import React, { useState } from 'react'

import Image from 'next/image'
import { Product } from '../types'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import useCart from '../context/use-cart'

interface InfoProps {
  data: Product
};

const Info: React.FC<InfoProps> = ({data}) => {

const cart = useCart()

// const handleAddToCart = () => {
//   const desiredQuantity = 1; // Change this to the desired quantity
//   cart.addItem(data, desiredQuantity);
// };


const [quantity, setQuantity] = useState(1); // Default quantity is 1

const handleAddToCart = () => {
    cart.addItem(data, quantity);
    // Reset quantity after adding to cart
    setQuantity(1);
};



  return (
    <div  className=' h-auto mt-5' >
     
      <div  className='flex flex-col gap-y-3 w-full' >
        <h1   className='text-green text-3xl font-bold'>{data.name}</h1>
       
        <h1 className='text-2xl font-semibold py-3'>${data.price}</h1>
        <h3   className='text-2xl py-3 '>Quantity</h3>
        {/* <input type="text" className='px-1 py-1 w-[100px] border-2'  value={cart.addItem.length}/>
   */}

<input
    type="number"
    min="1" // Minimum value is 1
    className='px-1 py-1 w-[100px] border-2'
    value={quantity}
    onChange={(e) => setQuantity(parseInt(e.target.value))}
/>
        <div className="w-full   ">
      <div className=" w-full max-w-md rounded-2xl  pt-2">
      <button  className='bg-green w-full px-5 py-4 text-bold text-xl text-white rounded-2xl' onClick={handleAddToCart} >Add To Cart</button>
        <Disclosure  >
          {({ open }) => (
            <>
              <Disclosure.Button className="flex py-8  w-full justify-between rounded-lg  px-4  text-left text-sm font-medium text-green  focus:outline-none focus-visible:ring focus-visible:ring-green focus-visible:ring-opacity-75">
                <span className='text-xl' >PRODUCT INFO</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-green`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              Im a product detail. Im a great place to add more information 
              about your product such as sizing, material, care and cleaning 
              instructions. This is also a great space to write what makes this
               product special and how your customers can benefit from this item.
              </Disclosure.Panel>
              <hr className='h-0.5 bg-green mb-5' />

            </>
          )}
        </Disclosure>
    
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg  px-4 py-8 text-left text-sm font-medium text-green  focus:outline-none focus-visible:ring focus-visible:ring-green focus-visible:ring-opacity-75">
                <span className='text-xl'>RETURN & REFUND POLICY</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-green`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              Im a Return and Refund policy. 
              Im a great place to let your customers know what to do in case they are 
              dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust 
              and reassure your customers that they can buy with confidence.
              </Disclosure.Panel>
              <hr className='h-0.5 bg-green   mb-5' />
            </>
          )}
        </Disclosure>
         <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg  px-4 py-8 text-left text-sm font-medium text-green  focus:outline-none focus-visible:ring focus-visible:ring-green focus-visible:ring-opacity-75">
                <span className='text-xl'>SHIPPING INFO</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-green`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              Im a shipping policy. Im a great place to add more information 
              about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure 
              your customers that they can buy from you with confidence.
              </Disclosure.Panel>
              <hr className='h-0.5 bg-green  mb-5' />
            </>
          )}
        </Disclosure>
       
     
      </div>
    </div>

      </div>
     
    </div>
  )
}

export default Info
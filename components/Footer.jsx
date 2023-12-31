import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='w-full mx-auto border-t-2 bg-hero  border-navbar py-5 ' >
        <div  className='max-w-7xl  h-auto md:h-[30vh] flex py-5   flex-col  md:flex-row justify-between  mx-8 md:mx-auto' >
         
                <ul className='flex flex-col md:gap-5  gap-2 cursor-pointer  ' > 
                    <li  className='cursor-pointer md:py-4  py-2 text-xl'>Terms & Conditions</li>

                    <li  className='cursor-pointer'>
                    Privacy Policy</li>
                    <li className='cursor-pointer'>
                    Shipping Policy</li>
                    <li className='cursor-pointer'>
                    Refund Policy</li>
                     <li className=' cursor-pointer'>
                    Cookie Policy ​</li>
                </ul>
                <ul   className='flex flex-col  md:gap-5  gap-2 '>
                   
   
                    <li className=' md:py-4  py-2 text-xl'>
                    FAQ
                    ​</li>
                    <li>
                    Payment Methods</li>
                </ul>
                <ul  className='flex flex-col md:gap-5  gap-2 ' >  
                    <li  className=' md:py-4  py-2 text-xl'>
                    Address:

</li>
                    <li>

                    500 Terry Francine St.</li>
                    <li>
                    San Francisco, CA 94158</li>
                </ul>
                <ul  className='flex flex-col   md:gap-5  gap-2 ' >
                    <li className=' md:py-4  py-2  text-xl' >  
                    Contact:</li>
                    <li>
                    info@mysite.com</li>
                    <li>
                    123-456-7890</li>
                    <li>
Terms & Conditions</li>
                </ul>




            </div>
           




        

    </div>
    <div className='w-full bg-bgfooter  h-auto  border-t-2 px-5 md:px-0 border-navbar flex justify-center items-center' >
      <h1  className='text-green md:text-xl text-md ' >© 2023 by Pure Flave. Powered and secured by chbit</h1>
             
             </div>
    </>
  )
}

export default Footer
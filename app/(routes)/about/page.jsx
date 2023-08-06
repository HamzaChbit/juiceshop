import Image from 'next/image'
import React from 'react'

const PageAbout = () => {
  return (
    <div className='lg:mx-auto mx-10  max-w-7xl  h-full mt-10 py-10 z-5'  >
        <div  className='flex lg:flex-row  flex-col justify-between  relative gap-x-10  '>
            <div  className='flex flex-col  w-full mr-10 h-full ' >
                <h2  className='text-green text-2xl font-bold  pb-5 '>About Us</h2>
                <h1  className='text-green text-5xl font-bold py-10' >Bringing 100% <br /> natural juices <br /> straight to your door</h1>
                <p className='mr-12 ' > 
                 I&apos;m a paragraph. Click here to add your own text and edit 
                     It&apos;s easy. Just click “Edit Text” or double click me to add your own content and make
                      changes to the font. 
                    I&apos;m a great place for you to tell a story and let your users know a little more about you  </p  > 
            </div>
           
              <div className='relative lg:w-full       h-[300px]   lg:h-[500px] mt-10'>
              <div  className='absolute right-0  ' >
              <Image src='/image/11z.webp' alt='image'  width={400}  height={400} className='lg:w-[400px]  w-[250px]  lg:h-[400px]' />
                
              </div>
               
              
                <div  className=' absolute bottom-0 left-0  ' >
               
                <Image src='/image/10z.webp' alt='image'  className='lg:w-[400px]  w-[250px]  lg:h-[400px]' width={400 }height={400} />
            </div>
         
          
        </div>

    </div>
    </div>
  )
}

export default PageAbout 
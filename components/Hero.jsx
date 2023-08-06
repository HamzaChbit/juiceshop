import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-7xl  mx-10  md:mx-auto h-[100vh] flex md:flex-row   flex-col-reverse  justify-between ' >

        <div className='w-auto    h-[70vh]    flex flex-col    justify-center  gap-5 mb-10' >  
            <h1 className='py-5  w-auto  leading-1 font-bold tracking-wider text-green text-5xl ' >Freshly pressed,<br  /> straight to <br />your door
</h1>
<p  className='   md:w-[60%]  w-full text-2xl  py-1 leading-1' >At Pure Flave, we re dedicated to goodness in every sip. 
Delicious, fresh juice, just as nature intended.</p>
<Link href='/shop' ><button  className='px-5 py-3 md:w-[20%] w-full text-white text-xl rounded-2xl bg-green hover:bg-white hover:border-2 hover:border-green hover:duration-150
' >Shop</button></Link>

        </div>

        <div  className='bg-back bg-no-repeat  md:w-[50%] w-full  h-[70vh]  bg-cover '>

        </div>

    </div>
  )
}

export default Hero
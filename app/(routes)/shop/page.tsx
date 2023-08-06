
import React from 'react'
import getProducts from '../../../actions/get-products'
import FeaturedBanner from '../../../components/FeaturedBanner '

export const revalidate=0;

const PageShop = async () => {


  const products = await getProducts({
    categoryId: '4c8f02be-399c-4f43-a062-daab8e42936c',
    isFeatured:true
  })
 
  return (
    

    <div className='max-w-7xl md:mx-auto mx-5 h-auto  ' >

      <div  className='flex  py-10 flex-col ' >
        <div  className='py-10' >
          <h1 className='text-5xl  text-green font-bold line-clamp-6  tabular-nums '  >Shop Flaves</h1>
          <p  className='text-xl pt-10 font-sans ' >Cold-pressed, 100% organic, packed with vitamins,nutrients, <br /> and natural goodness.</p>
        </div>
        <div className='w-full  h-full  ' >
          <div className='w-full py-10' >
          
          
         <FeaturedBanner   items={products} />
        
       
      
          </div>
   
      </div>

      </div>



     
        
    </div>
  )
}

export default PageShop
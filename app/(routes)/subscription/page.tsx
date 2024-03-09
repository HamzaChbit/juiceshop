
import React from 'react'
import getProducts from '../../../actions/get-products'
import FeaturedHome from '../../../components/FeaturedHome'


export const revalidate=0;
const PageSubscription = async () => {
   
  
  const Products = await getProducts({ 
   
    categoryId: 'e13154eb-0376-4a53-9808-4eb6a446405d',
    isFeatured:true,


   
    });
  
    
 


 
  return (
    

    <div className='max-w-7xl mx-10  md:mx-auto  h-full ' >

      <div  className='flex  py-10 flex-col  ' >
      <div  className='py-10' >
          <h1 className='text-5xl  text-green font-bold line-clamp-6  tabular-nums '  >Subscription</h1>
          <p  className='text-xl pt-10 font-sans ' >Subscribe to any of our plans and select how often you want them delivered.

<br /> them delivered.</p>
        </div>
        <div className='w-full h-full ' >
          <div className='w-full py-10' >
          
          
         <FeaturedHome   items={Products} />
        
       
      
          </div>
   
      </div>

      </div>



     
        
    </div>
  )
}

export default PageSubscription

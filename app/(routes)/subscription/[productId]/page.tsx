import React from 'react'
import getProduct from '../../../../actions/get-product';
import Image from 'next/image';
import Info from '../../../../components/Info';
interface ProductPageProps {
    params :{
        productId : string
       
    },
   
}
export const revalidate=0;

const PageProduct:React.FC<ProductPageProps> =async ({params}) => {
    const product = await getProduct(params.productId);
    
    if (!product) {
        return null;
      }
  
  return (
    <div  className='max-w-7xl h-full md:mx-auto mx-5  ' >
        <div className='flex md:flex-row  flex-col w-full justify-center gap-x-10 py-10' >
        <div  className='  flex  justify-center h-full w-[100%]' >
          <Image  width={850} height={100} alt='product image'  src={product.images?.[0].url} />
        </div>
        <div  className='w-[100%]'>
            <Info data={product}/>
        </div>

        </div>
     


    </div>
  )
}

export default PageProduct
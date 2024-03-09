import React from 'react'
import { Product } from '../types'
import ProductSub from './ProductSub'


interface FeaturedBannerProps {
  items : Product[]
}

const FeaturedHome:React.FC<FeaturedBannerProps>   = ({items}) => {
  return (
    <div  className='grid md:grid-cols-3  grid-cols-1  gap-x-5'  >
                  {items.map((item)=> (
        <ProductSub   key={item.id}  data={item} />
      ))
      }
    </div>
  )
}

export default FeaturedHome
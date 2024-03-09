import React from 'react'
import { Product } from '../types'
import ProductCard from './ProductCard'
interface FeaturedBannerProps {
  items : Product[]
}

const FeaturedBanner:React.FC<FeaturedBannerProps>   = ({items}) => {
  return (
    <div  className='grid grid-cols-2 grid-rows-2  gap-x-5   '  >
                  {items.map((item)=> (
        <ProductCard   key={item.id}  data={item} />
      ))
      }

    </div>
  )
}

export default FeaturedBanner 
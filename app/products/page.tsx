import React from 'react'
import ProductsContainer from '@/components/products/ProductContainer'
export default function page({searchParams}:{
    searchParams: {layout?:string; search?: string}
}) {
    const layout = searchParams.layout || 'grid'
    const search = searchParams.search ||  ''
  return (
   <ProductsContainer layout={layout} search={search}/>
  )
}

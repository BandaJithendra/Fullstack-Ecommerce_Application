
import React from 'react'
import { useParams } from 'react-router-dom'
// import { productTypes } from '../data/branddata.js'x`
import ProductTypeChild from './childComponents/ProductTypeChild.jsx'
import { products } from '../data/branddata.js'
import Header from './header.jsx'

function ProductTypes() {
  const params=useParams()
  // console.log(params)
  const {sub_category,product_type} = params
  const items = products.filter(item => item.product_type===product_type)

  return (
    <>
    <Header/>
    <div className='flex justify-around p-15'>

      {
        items.map(item=> <ProductTypeChild items={item}/>)
      }

      
    </div>
    </>
  )
}

export default ProductTypes





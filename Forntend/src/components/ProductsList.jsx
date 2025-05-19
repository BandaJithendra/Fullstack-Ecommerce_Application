import React from 'react'
import { products } from '../data/branddata'
import { useParams } from 'react-router-dom'
import ProductListChild from './childComponents/ProductListChild';
import Header from './header';

function ProductsList() {
    const params = useParams();
    const {sub_category}=params
    console.log(sub_category)
    const plist = products.filter(item=> item.sub_category===sub_category)
    const productslist = [... new Set(plist.map(item=> item.product_type))]
    // console.log(productslist)
    // productslist = [... new Set(productslist.map(item=> item.product_type))]
    return (
        <>
        <Header />
        <div className='flex justify-around bg-gray-100 p-5'>
            {
                productslist.map(item => <ProductListChild product_type={item} gendercat={sub_category}/>)
                // productslist.map(item => <ProductListChild product_type={item.product_type} gendercat={sub_category}/>) 
                // productslist.map(item=>console.log(item.product_type))               

            }
            {/* <h1>{title}</h1> */}

            
        </div>
        </>
    )
}

export default ProductsList
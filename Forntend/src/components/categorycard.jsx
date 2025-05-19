import React from 'react';
import { products } from '../data/branddata';
import CategoryChild from './childComponents/CategoryChild.jsx';

function CategoryCard(props) {
    const category = props.category
    // console.log("cat........",category)
    const categorydata = products.filter(item => item.category===category)
    // console.log("......",categorydata)
    // const categorydata = category.filter(item => item)
    const subcategory = [... new Set(categorydata.map(item => item.sub_category))]
    // console.log("sub....",subcategory)
    return ( 
        <div className='py-5 bg-white mt-'>
            <h1 className='font-mono text-4xl pl-3 font-bold bg-center text-black-400'>{category}</h1>
            <div className='mt-3 px-5 py-10 h-95 shadow-lg bg-gray-200'>
                <div className='flex justify-around'>{
                    subcategory.map(item => <CategoryChild name={item}/>)
                }
                </div>
            </div>
        </div>
     );
}

export default CategoryCard;

{/* <div className='py-5 bg-white mt-'>
            <h1 className='font-mono text-4xl pl-3 font-bold bg-center text-black-400'>Fashions</h1>
            <div className='mt-3 px-5 py-10 h-95 shadow-lg bg-gray-200'>
                <div className='flex justify-around'>{
                    subcategory.map(item => <ClothingChild name={item}/>)
                }
                </div>  
            </div>
        </div> */}
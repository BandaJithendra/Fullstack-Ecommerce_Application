import React from 'react';
// import { categories } from '../data/branddata';
// import { clothing_section } from '../data/branddata';
// import ClothingChild from './childComponents/CategoryChild'
import { products } from '../data/branddata';
import CategoryCard from './categorycard';
function Category() {
    const categories = [... new Set(products.map(item => item.category))]
    console.log(categories)
    return (
        <div>{
            categories.map(category=>
                <CategoryCard category={category}/>
            )
        }
        </div>
            
    );
}

export default Category;

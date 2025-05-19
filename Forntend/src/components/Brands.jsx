
import React from 'react';
import { brandData } from '../data/branddata';
import Brand from './childComponents/Brand';
// import '../Styles/brands.css';


export default function Brands(){

    return(
        <div className='flex justify-center gap-9'>

            {
                brandData.map(item=> <Brand name={item}/>)
            }

            {/* <h1 className="text-red-500">Hello Tailwind</h1> */}

        </div>
    );

}



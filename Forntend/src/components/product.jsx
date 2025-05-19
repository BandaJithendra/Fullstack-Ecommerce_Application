import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { products } from '../data/branddata.js';
import Header from './header.jsx';
import axios from 'axios';

function Product(props) {
    const params = useParams()
    const navigate = useNavigate()
    const {sub_category, product_type, title} = params
    const items = products.filter(item => item.sub_category===sub_category &&  item.product_type===product_type && item.title===title)
    // console.log("item....",items[0].description)

    const HandleAddToCartClick = async ()=>{
        console.log(localStorage.getItem("email"))
        const email = localStorage.getItem("email")
        // console.log("email")
        // navigate("/cart")
        const payload = {
            email: email,
            product_id: items[0].product_id
        }
        try{
            const res = await axios.post("http://localhost:4000/addToCart",payload)
            console.log("Iendhi...")
            console.log(res?.data.message)
            // setResponse(res?.data.message)
        } catch(err){
            console.log("Kaaledhu...",err)
            // console.log(err.response.data.message)
            // setError(err.response.data.message)
            return
        }
        navigate('/cart')
    }
    
    return (
        <>
        <Header /> 
        <div className='px-3 pt-8 pb-3 flex justify-center'>
            
            <div className='bg-amber-200 w-120 h-130 mr-10 shadow-xl'>
                <img className='h-full w-full' src={`/Images/Items/${sub_category}/${product_type}/${title}.webp`} alt={`${title}`} />
            </div>
            <div className='w-150 px-5'>
                <div>
                    <h1 className='text-2xl font-medium'>{title}</h1>
                    <h1 className='text-xl'>{items[0].description}</h1>
                    <div className='flex'>
                        <h1 className='text-green-600 mr-2'>{items[0].rating.rate}★</h1>
                        <h1 className='text-black-600'>{items[0].rating.count} ratings</h1>
                    </div>
                </div>
                <div className='mt-3'>
                    <h1 className='text-2xl font-medium'>₹{items[0].price}</h1>
                </div>
                <div className='mt-3'>
                    <h1 className='text-lg font-medium'>Available offers</h1>
                    <h1 className='flex items-center'><img className='w-4 h-4 mr-2' src="\Images\images\Bank Offer.webp" alt="img"/> Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card T&C</h1>
                    <h1 className='flex items-center'><img className='w-4 h-4 mr-2' src="\Images\images\Bank Offer.webp" alt="img"/>Bank Offer 10% off up to ₹1,250 on all Axis Bank Credit Card (incl. migrated ones) EMI Txns of ₹7,499 and above T&C</h1>
                    <h1 className='flex items-center'><img className='w-4 h-4 mr-2' src="\Images\images\Bank Offer.webp" alt="img"/>Bank Offer 10% off up to ₹1,250 on Flipkart Axis Bank Credit Card EMI Txns, on orders of ₹7,499 and above T&C</h1>
                    <h1 className='flex items-center'><img className='w-4 h-4 mr-2' src="\Images\images\Bank Offer.webp" alt="img"/>Bank Offer 10% off on BOBCARD EMI Transactions, up to ₹1,500 on orders of ₹5,000 and above T&C</h1>
                    <h1 className='text-blue-600 hover:cursor-pointer'>View 7 more offers</h1>
                </div>
                <div className='mt-5'>
                    <button className='w-50 h-13 bg-amber-500 text-lg font-medium text-white  right-5 hover:cursor-pointer mr-5' onClick={HandleAddToCartClick}>ADD TO CART</button>
                    <button className='w-50 h-13 bg-amber-600 text-lg font-medium text-white right-5 hover:cursor-pointer'>BUY NOW</button>
                </div>
                

            </div>
        </div>
        </>
    );
}

export default Product;
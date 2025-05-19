import React, { useState,useEffect } from 'react';
// import axios from 'axios';
import CartItem from '../cartItem';
import PriceDetails from '../priceDetails';
import PlaceOrder from '../placeorder';
import { cartitems } from '../../data/cartdata.js';
import axios from 'axios';

function Cart () {
    
    const [data, setData] = useState([" "])

    // useEffect(() => {
    //     const fetchData = async()=>{
    //         try{
    //             const response = await axios.get("https://jsonplaceholder.typicode.com/todos")
    //             setData(response.data)
    //         }
    //         catch(err){
    //             console.log("Error occured",err)
    //         }
    //     }
    //     fetchData()
    // }, []);

    useEffect(() => {
        const RetriveCartData = async () => {
            const email = localStorage.getItem("email");
            // console.log("email....lalitha..",email)
            const payload = {
                email: email
            };
            try {
                const res = await axios.post("http://localhost:4000/cart", payload);
                // console.log("Iendhi...");
                setData(res?.data.cart);
                // console.log("data..",data);
            } catch (err) {
                console.log("Kaaledhu...", err);
            }
        };

        RetriveCartData();
    }, []);
    // console.log("data...",data)
    
    
    return ( 
        <>
        <div className='flex  mx-30 my-5 pb-10'>
            <div className='mr-10 w-220 pb-5 bg-white'>
                {
                    data.map((item)=>
                        // console.log(item)
                        <CartItem item={item}/>
                    )
                }
                {/* <CartItem /> */}
                {/* for(let item of cartitems){
                    <CartItem item={item}/>
                } */}
                <PlaceOrder />

            </div>
            {/* <div className='bg-white'> */}
                <PriceDetails/>
            {/* </div> */}
        </div>
        
        </>
     );
}

export default Cart;
import React from 'react';

function PriceDetails() {
    return ( 
        <div className='w-90 h-76 shadow-xl shadow-gray-300 bg-white sticky top-3'>
            <div className='h-11 mb-3 px-7 text-gray-600 text-bold text-lg shadow-sm flex items-center'>
                <h1>PRICE DETAILS</h1>
            </div>
            <div className='table-auto px-5 pb-5 shadow-sm'>
                <thead>
                    <tr>
                        <th className='w-70 text-left'></th>
                        <th className='w-30 text-center'></th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='h-10'>
                        <td><h1 className='text-lg'>Price (3 items)</h1></td>
                        <td className='text-lg text-right'><h1 className='test-xl'>₹3,956</h1></td>
                    </tr>
                    <tr className='h-10'>
                        <td><h1 className='text-lg'>Discount</h1></td>
                        <td className='text-lg text-right text-green-700'><h1>− ₹2,623</h1></td>
                    </tr>
                    <tr>
                        <td><h1 className='text-lg'>Delivery Charges</h1></td>
                        <td><h1 className='text-lg text-right text-green-700'>Free</h1></td>
                    </tr>
                </tbody>   
            </div>
            <div className='p-5 shadow-sm'>
                <thead>
                    <tr>
                        <th className='w-70' ></th>
                        <th className='w-30'></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><h1 className='text-xl text-left'>Total Amount</h1></td>
                        <td><h1 className='text-lg text-right'>₹1,333</h1></td>
                    </tr>
                </tbody> 
            </div>
            <div className='px-5 py-3 shadow-sm'>
                <h1 className='text-lg text-green-700'>You will save ₹2,623 on this order</h1>
            </div>
        </div>
     );
}

export default PriceDetails;
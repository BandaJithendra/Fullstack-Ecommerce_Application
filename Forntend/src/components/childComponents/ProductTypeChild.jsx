import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductTypeChild = (props) => {
    const {items}=props
    console.log(".....",items.product_type)
    console.log("title..",items.title)
    const navigate = useNavigate()
    // console.log(`../Images/Items/${items.product_type}/${items.title}.webp`)
  return (
//     <div className='shadow-sm'>
//         <img className='w-60 h-60 rounded-3xl' src={details.image} alt="Image"/>
//         <h2 className='m-1 font-bold text-gray-500 '>{details.tshirtOrg}</h2>
//         <p className='w-70'>{details.tshirtName}</p>
//         <div className='flex gap-8 text-center'>
//             <span className='font-medium' >₹{details.sp}</span>
//             <span className='line-through text-gray-500'>₹{details.cp}</span>
//             <span className='text-green-500 font-medium'>{details.dis}% off</span>
//         </div>
// </div>
<>
  {/* <h1>Hello</h1> */}
  <div className='shadow-black-500 w-90 bg-gray-100 relative pt-3 '  >
    <button className=' h-75 w-90 flex justify-center p-2 ' onClick={()=>navigate(`/category/${items.sub_category}/${items.product_type}/${items.title}`)}>
      <img className='hover:shadow-2xl h-full rounded-sm w-70' src={`/Images/Items/${items.sub_category}/${items.product_type}/${items.title}.webp`} alt={`${items.product_type}`} />
    </button>
    <div className='bg-white p-4 w-90'>
      <h1 className='text-xl font-bold  text-left'>{items.title}</h1>
      <h1 className='text-lg text-left '>{items.description}</h1>
      <h1 className='text-xl font-medium text-left'> ₹ {items.price}</h1>
    </div>
  </div>
</>

  )
}

export default ProductTypeChild

// onClick={()=>navigate(`/category/${props.gendercat}/${product_type}`)}
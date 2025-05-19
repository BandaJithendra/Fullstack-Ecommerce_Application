import React from 'react'
import { useNavigate } from 'react-router-dom'

const CategoryChild = (props) => {
    const navigate=useNavigate();   
    return (
        <div className='shadow-black-500 hover:shadow-2xl hover:scale-105 h-70' >

            <button onClick={()=>navigate(`category/${props.name}`)}>
                <img
                    className='w-73 h-70 rounded-md'
                    src={`../Images/Category/${props.name}.webp`} alt={`${props.name}`}
                />
            </button>
            <h1 className='text-xl font-bold text-center mt-2'>{props.name}</h1>
        </div>
    )
}

export default CategoryChild
import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
} from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';
// import {ProductTypes} from '../data/branddata'

const ProductListChild = (props) => {

    const navigate=useNavigate();
    const product_type = props.product_type

    console.log("name......",props.product_type)
    return (
        <div>
            <div className='shadow-black-500 hover:shadow-2xl hover:scale-105 h-70' >
                <button onClick={()=>navigate(`/category/${props.gendercat}/${product_type}`)}>
                    <img
                        className='w-60 h-70 rounded-md'
                        src={`../Images/Products/${product_type}.webp`} alt={`${product_type}`}
                    />
                </button>
                <h1 className='text-xl font-bold text-center mt-2'>{props.product_type}</h1>
            </div>

            {/* <Card className="w-50 h-80" onClick={()=>navigate(`/category/${props.gendercat}/${props.name}`)}>
                <CardHeader floated={false} className="h-80">
                    <img src={`../Images/Wear/${props.name}.jpg`} alt={`${props.name}`} />
                </CardHeader>
                <CardBody className="text-center">
                    <Typography variant="h4" color="blue-gray" className="mb-2">
                        {props.name}
                    </Typography>
                </CardBody>

            </Card> */}

        </div>
    )
}

export default ProductListChild
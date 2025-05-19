import React from 'react'
import { Carousel } from "@material-tailwind/react";
import CarousuelChild from './childComponents/CarousuelChild';
// npx tailwindcss-cli@latest init     - > for material tailwind.config.js

const Carousuel = () => {
    const imagesCnt=["1","2","3","4"]
    return (
        <>
            <Carousel className="rounded-xl h-100 mt-10" autoplay={true} autoplayDelay={3000} loop={true}>

                {
                    imagesCnt.map(item => <CarousuelChild cnt={item}/>)
                }

                
                
            </Carousel>



        </>
    )
}

export default Carousuel
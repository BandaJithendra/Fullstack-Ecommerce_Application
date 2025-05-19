import React from 'react'

function CarousuelChild(props){
    return (
        <div>
            <img
                src={`../Images/Carosuel/img${props.cnt}.webp`}
                alt={`Image ${props.cnt}`}
                className="h-100 object-cover"
            />
        </div>
    )
}

export default CarousuelChild


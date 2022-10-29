import React from 'react'
import './CategoryBlock.css'

const CategoryBlock = ({img, name}) => {

    return (
        <div className='CategoryBlockDiv' style={{backgroundImage: `url(${img})`}}>
            <h1>{name}</h1>
        </div>
    )
}

export default CategoryBlock
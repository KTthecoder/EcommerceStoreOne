import React from 'react'
import './CategoryBlockBig.css'

const CategoryBlockBig = ({img, name}) => {

    return (
        <div className='CategoryBlockDivBig' style={{backgroundImage: `url(${img})`}}>
            <h1>{name}</h1>
        </div>
    )
}

export default CategoryBlockBig
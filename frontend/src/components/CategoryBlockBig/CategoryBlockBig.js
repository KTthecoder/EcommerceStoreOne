import React from 'react'
import { useNavigate } from 'react-router-dom'
import './CategoryBlockBig.css'

const CategoryBlockBig = ({img, name, slug}) => {
    const navigation = useNavigate()

    return (
        <div onClick={() => navigation(`/categories/${slug}`)} className='CategoryBlockDivBig' style={{backgroundImage: `url(http://127.0.0.1:8000${img})`}}>
            <h1>{name}</h1>
        </div>
    )
}

export default CategoryBlockBig
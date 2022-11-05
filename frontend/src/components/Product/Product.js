import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Product.css'

const Product = ({img, name, normalPrice, discountPrice, slug}) => {
  const navigation = useNavigate()

  return (
    <div className='ProductContainer' onClick={() => navigation(`/product/${slug}`)}>
      <div className='ProductImg' style={{backgroundImage: `url(http://127.0.0.1:8000${img})`}}></div>
      <div className='ProductInfo'>
        <h1 className='ProductInfoH1'>{name}</h1>
        <div className='ProductInfoPriceDiv'>
          {discountPrice ? <p className='ProductInfoPrice'>${discountPrice}</p> : null}
          <p className='ProductInfoDiscountPrice'>${normalPrice}</p>
        </div>
      </div>
    </div>
  )
}

export default Product
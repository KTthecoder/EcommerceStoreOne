import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Product.css'

const Product = ({img, name, normalPrice, discountPrice, slug, alt}) => {
  const navigation = useNavigate()

  return (
    <div className='ProductContainer' onClick={() => navigation(`/product/${slug}`)}>
      <img className='ProductImg' src={'http://127.0.0.1:8000' + img} alt={alt} />
      <div className='ProductInfo'>
        <h1 className='ProductInfoH1'>{name}</h1>
        <div className='ProductInfoPriceDiv'>
          {discountPrice ? <p className='ProductInfoPrice'>${normalPrice}</p> : null}
          {discountPrice ? <p className='ProductInfoDiscountPrice'>${discountPrice}</p> : <p className='ProductInfoDiscountPrice'>${normalPrice}</p>}
        </div>
      </div>
    </div>
  )
}

export default Product
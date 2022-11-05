import React from 'react'
import { useNavigate } from 'react-router-dom'
import './ProductBig.css'

const ProductBig = ({img, name, normalPrice, discountPrice, slug}) => {
  const navigation = useNavigate()

  return (
    <div className='ProductContainerBig' onClick={() => navigation(`/product/${slug}`)}>
      <div className='ProductImgBig' style={{backgroundImage: `url(http://127.0.0.1:8000${img})`}}></div>
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

export default ProductBig
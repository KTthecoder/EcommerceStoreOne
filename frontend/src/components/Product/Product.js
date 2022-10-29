import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Product.css'

const Product = ({img, name, price}) => {
  const navigation = useNavigate()

  return (
    <div className='ProductContainer' onClick={() => navigation('/product/some-nice-tee')}>
      <div className='ProductImg' style={{backgroundImage: `url(${img})`}}></div>
      <div className='ProductInfo'>
        <h1 className='ProductInfoH1'>{name}</h1>
        <div className='ProductInfoPriceDiv'>
          <p className='ProductInfoPrice'>${price}</p>
          <p className='ProductInfoDiscountPrice'>${price}</p>
        </div>
        
        {/* <div className='ProductSizesDiv'>
          <p>S</p>
          <p>M</p>
          <p>L</p>
          <p>XL</p>
        </div> */}
      </div>
    </div>
  )
}

export default Product
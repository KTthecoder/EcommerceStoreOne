import React from 'react'
import './ProductBig.css'

const ProductBig = ({img, name, price}) => {
  return (
    <div className='ProductContainerBig'>
      <div className='ProductImgBig' style={{backgroundImage: `url(${img})`}}></div>
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

export default ProductBig
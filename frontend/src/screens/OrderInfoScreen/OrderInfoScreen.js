import React from 'react'
import './OrderInfoScreen.css'
import LikeIcon from '../../static/icons/like.png'
import PlusIcon from '../../static/icons/plus.png'
import photo from '../../static/images/tee1.jpg'
import useFetchGetAuth from '../../hooks/useFetchGetAuth'
import { useNavigate, useParams } from 'react-router-dom'

const OrderInfoScreen = () => {
  const { id } = useParams()
  const { data } = useFetchGetAuth(`http://127.0.0.1:8000/api/order/${id}`)
  
  const navigation = useNavigate()

  return (
    <div className='CartContainer'>
      <div className='CartContainer1'>
        <div className='ShopHeader'>
          <div className='ShopHeaderLeft'>
            <h1>ORDER #{id}</h1>
          </div>
        </div>
      </div>
      <div className='CartMain'>
        <div className='CartMain1'>
          <div className='CartMainLeft'>
            <div className='CartMainHeader'>
              <p>PRODUCT</p>
              <p>QUANTITY</p>
              <p>PRICE</p>
            </div>
            {data && data['orderItem'].map((item) => (
              <div className='CartMainDiv'>
                  <div className='CartMainDivLeft'>
                    <div className='CartMainDivLeftImgDiv'>
                      <img src={`http://127.0.0.1:8000${item.product.frontImage}`} className='CartMainDivLeftImg' alt={item.product.name}/>
                    </div>
                    <div className='CartMainDivLeftInfo'>
                        <h1>{item.product.name}</h1>
                        <div className='CartMainDivLeftInfo1'>
                          <p>Size: {item.size.toUpperCase()},</p>
                          <p>Color: {item.product.color}</p>
                        </div>
                        <div className='CartMainDivLeftInfo1'>
                          <p><span>Category:</span> {item.product.categoryName}</p>
                        </div>
                    </div>
                  </div>
                  <div className='CartMainDivMid'>
                    <input type='number' className='CartMainDivMidInp' value={item.quantity} disabled={true} />
                  </div>
                  <div className='CartMainDivRight'>
                    <p>${item.item_total}</p>
                    {item.product.discountPrice ? <p>${item.product.discountPrice}/each</p> : <p>${item.product.regularPrice}/each</p>}
                  </div>
                  <div className='CartMainDivBtns'>
                    <div className='CartMainDivBtn' style={{display: 'none'}}></div>
                    <div className='CartMainDivBtn' onClick={() => navigation(`/product/${item.product.slug}`)}>
                      <p>Show</p>
                    </div>
                  </div>
              </div>
            ))}
            
          </div>
          <div className='CartMainRight'>
            {data && data['shippingAddress'].map((item) => (
              <>
                <div className='CartMainRightDiv1'>
                  <h2>SHIPPING INFO</h2>
                  <div className='CartMainRightDiv2Blockkk'>
                    <div className='CartMainRightDiv2Blockkk1'>
                      <p>{item.name}</p>
                      <p>{item.lastName}</p>   
                    </div>
                    <div className='CartMainRightDiv2Blockkk1'>
                      <p>{item.address}</p>
                      <p>{item.zipcode}, {item.city}</p>   
                    </div>                     
                  </div>  
                </div>
                <div className='CartMainRightDiv2'>
                  <div className='CartMainRightDiv2Block'>
                    <p>Total Price:</p>
                    <p>${data['order_total']}</p>                              
                  </div>
                  <div className='CartMainRightDiv2Block'>
                    <p>Discount:</p>
                    <p>$0</p>
                  </div>
                  <div className='CartMainRightDiv2Block'>
                    <p>Total:</p>
                    <h2>${data['order_total']}</h2>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderInfoScreen
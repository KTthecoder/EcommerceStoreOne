import React from 'react'
import './CartScreen.css'
import { useNavigate } from 'react-router-dom'
import LikeIcon from '../../static/icons/like.png'
import LeftArrowIcon from '../../static/icons/leftArrow.png'
import useFetchCart from '../../hooks/useFetchCart'

const CartScreen = () => {
    const navigation = useNavigate()
    const { data, total } = useFetchCart()

    return (
        <div className='CartContainer'>
            <div className='CartContainer1'>
                <div className='ShopHeader'>
                    <div className='ShopHeaderLeft'>
                        <h1>SHOPPING CART</h1>
                        <p>{data && data ? Object.keys(data).length : 0} Items</p>
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
                        {data && data ? data.map((item) => (
                            <div className='CartMainDiv' key={item.id}>
                                <div className='CartMainDivLeft'>
                                    <div className='CartMainDivLeftImgDiv'>
                                        <img src={`http://127.0.0.1:8000${item.product.frontImage}`} className='CartMainDivLeftImg' alt='Hoodie' />
                                    </div>
                                    <div className='CartMainDivLeftInfo'>
                                        <h1>{item.product.name}</h1>
                                        <div className='CartMainDivLeftInfo1'>
                                            <p>Size: {item.size},</p>
                                            <p>Color: {item.product.color}</p>
                                        </div>
                                        <div className='CartMainDivLeftInfo1'>
                                            <p><span>Category:</span> {item.product.categoryName}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='CartMainDivMid'>
                                    <input type='number' className='CartMainDivMidInp' placeholder='0' value={item.quantity} onChange={() => item.quantity} />
                                </div>
                                <div className='CartMainDivRight'>
                                    <p>${item.item_total}</p>
                                    {item.product.discountPrice ? <p>${item.product.discountPrice}/each</p> : <p>${item.product.regularPrice}/each</p>}
                                </div>
                                <div className='CartMainDivBtns'>
                                    <div className='CartMainDivBtn'>
                                        <img src={LikeIcon} className='CartMainDivBtnIcon' alt='Hart Icon' />
                                    </div>
                                    <div className='CartMainDivBtn'>
                                        <p>Remove</p>
                                    </div>
                                </div>
                            </div>
                        )): <h1>Cart is empty</h1>}    
                        <div className='CartMainButtonsDiv'>
                            <div className='CartMainBtnDiv'>
                                <div className='CartMainBtn'>
                                    <img src={LeftArrowIcon} className='CartMainBtnIcon' alt='Arrow Left' />
                                    {/* <a href="https://www.flaticon.com/free-icons/back" title="back icons">Back icons created by Roundicons - Flaticon</a> */}
                                    <p>Continue Shopping</p>
                                </div>
                            </div>  
                        </div>
                    </div>
                    <div className='CartMainRight'>
                        <div className='CartMainRightDiv1'>
                            <h2>Have Discount Code?</h2>
                            <div className='CartMainRightDiv1InpDiv'>
                                <input type='text' className='CartMainRightDiv1Inp' placeholder='Discount Code' />
                                <button>Apply</button>
                            </div>
                        </div>
                        <div className='CartMainRightDiv2'>
                            <div className='CartMainRightDiv2Block'>
                                <p>Total Price:</p>
                                <p>${total && total ? total : 0}</p>                              
                            </div>
                            <div className='CartMainRightDiv2Block'>
                                <p>Discount:</p>
                                <p>$0</p>
                            </div>
                            <div className='CartMainRightDiv2Block'>
                                <p>Total:</p>
                                <h2>${total && total ? total : 0}</h2>
                            </div>
                            <div className='CartMainRightDiv2Button' onClick={() => navigation('/checkout')}>     
                                <p>Make Purchase</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartScreen
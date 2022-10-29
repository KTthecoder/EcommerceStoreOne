import React from 'react'
import './CartScreen.css'
import { useNavigate } from 'react-router-dom'
import Hoodie1Img from '../../static/images/hoodie1.jpg'
import LikeIcon from '../../static/icons/like.png'
import LeftArrowIcon from '../../static/icons/leftArrow.png'

const CartScreen = () => {
    const navigation = useNavigate()

    return (
        <div className='CartContainer'>
            <div className='CartContainer1'>
                <div className='ShopHeader'>
                    <div className='ShopHeaderLeft'>
                        <h1>SHOPPING CART</h1>
                        <p>3 Items</p>
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
                        <div className='CartMainDiv'>
                            <div className='CartMainDivLeft'>
                                <div className='CartMainDivLeftImgDiv'>
                                    <img src={Hoodie1Img} className='CartMainDivLeftImg' alt='Hoodie' />
                                </div>
                                <div className='CartMainDivLeftInfo'>
                                    <h1>Some nice tee</h1>
                                    <div className='CartMainDivLeftInfo1'>
                                        <p>Size: XL,</p>
                                        <p>Color: Grey</p>
                                    </div>
                                    <div className='CartMainDivLeftInfo1'>
                                        <p><span>Category:</span> Hoodie</p>
                                    </div>
                                </div>
                            </div>
                            <div className='CartMainDivMid'>
                                <input type='number' className='CartMainDivMidInp' placeholder='0' />
                            </div>
                            <div className='CartMainDivRight'>
                                <p>$241.98</p>
                                <p>$120.99 / each</p>
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
                        <div className='CartMainDiv'>
                            <div className='CartMainDivLeft'>
                                <div className='CartMainDivLeftImgDiv'>
                                    <img src={Hoodie1Img} className='CartMainDivLeftImg' alt='Hoodie' />
                                </div>
                                <div className='CartMainDivLeftInfo'>
                                    <h1>Some nice tee</h1>
                                    <div className='CartMainDivLeftInfo1'>
                                        <p>Size: XL,</p>
                                        <p>Color: Grey</p>
                                    </div>
                                    <div className='CartMainDivLeftInfo1'>
                                        <p><span>Category:</span> Hoodie</p>
                                    </div>
                                </div>
                            </div>
                            <div className='CartMainDivMid'>
                                <input type='number' className='CartMainDivMidInp' placeholder='0' />
                            </div>
                            <div className='CartMainDivRight'>
                                <p>$241.98</p>
                                <p>$120.99 / each</p>
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
                        <div className='CartMainDiv'>
                            <div className='CartMainDivLeft'>
                                <div className='CartMainDivLeftImgDiv'>
                                    <img src={Hoodie1Img} className='CartMainDivLeftImg' alt='Hoodie' />
                                </div>
                                <div className='CartMainDivLeftInfo'>
                                    <h1>Some nice tee</h1>
                                    <div className='CartMainDivLeftInfo1'>
                                        <p>Size: XL,</p>
                                        <p>Color: Grey</p>
                                    </div>
                                    <div className='CartMainDivLeftInfo1'>
                                        <p><span>Category:</span> Hoodie</p>
                                    </div>
                                </div>
                            </div>
                            <div className='CartMainDivMid'>
                                <input type='number' className='CartMainDivMidInp' placeholder='0' />
                            </div>
                            <div className='CartMainDivRight'>
                                <p>$241.98</p>
                                <p>$120.99 / each</p>
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
                                <p>$887.96</p>
                            </div>
                            <div className='CartMainRightDiv2Block'>
                                <p>Discount:</p>
                                <p>$20</p>
                            </div>
                            <div className='CartMainRightDiv2Block'>
                                <p>Total:</p>
                                <h2>$867.96</h2>
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
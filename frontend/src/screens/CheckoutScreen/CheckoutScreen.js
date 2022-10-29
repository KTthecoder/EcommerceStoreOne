import React from 'react'
import './CheckoutScreen.css'
import LeftArrowIcon from '../../static/icons/leftArrow.png'
import RightArrowIcon from '../../static/icons/rightArrow.png'
import Hoodie1Img from '../../static/images/hoodie1.jpg'
import { useNavigate } from 'react-router-dom'

const CheckoutScreen = () => {
    const navigation = useNavigate()

    return (
        <div className='CheckoutContainer'>
            <div className='CartContainer1'>
                <div className='ShopHeader'>
                    <div className='ShopHeaderLeft'>
                        <h1>CHECKOUT PAGE</h1>
                        <p>3 Items</p>
                    </div>
                </div>
            </div>
            <div className='CheckoutContainer1'>
                <div className='CheckoutLeft'>
                    <div className='CheckoutLeftDouble'>
                        <div className='CheckoutLeftDoubleInpDivv'>
                            <p>Name</p>
                            <input type='text' placeholder='Name' className='CheckoutLeftDoubleInp' />
                        </div>
                        <div className='CheckoutLeftDoubleInpDivv1'>
                            <p>Last Name</p>
                            <input type='text' placeholder='Last name' className='CheckoutLeftDoubleInp' />
                        </div>
                    </div>
                    <div className='CheckoutLeftSingle'>
                        <div className='CheckoutLeftSingeInpDiv'>
                            <p>Address</p>
                            <input type='text' placeholder='Address' className='CheckoutLeftSingleInp' />
                        </div>
                    </div>
                    <div className='CheckoutLeftDouble'>
                        <div className='CheckoutLeftDoubleInpDiv'>
                            <p>Email</p>
                            <input type='text' placeholder='Email' className='CheckoutLeftDoubleInp' />
                        </div>
                        <div className='CheckoutLeftDoubleInpDiv1'>
                            <p>Phone Number</p>
                            <input type='text' placeholder='Phone Number' className='CheckoutLeftDoubleInp' />
                        </div>
                    </div>
                    <div className='CheckoutLeftDouble'>
                        <div className='CheckoutLeftDoubleInpDiv'>
                            <p>City</p>
                            <input type='text' placeholder='City' className='CheckoutLeftDoubleInp' />
                        </div>
                        <div className='CheckoutLeftDoubleInpDiv1'>
                            <p>Zip Code</p>
                            <input type='text' placeholder='Zip Code' className='CheckoutLeftDoubleInp' />
                        </div>
                    </div>
                    <div className='CheckoutLeftBot'>
                        <div className='CheckoutLeftBotBtnDiv'>
                            <div className='CartMainBtn2'>
                                <img src={LeftArrowIcon} className='CartMainBtnIcon' alt='Arrow Left' />
                                {/* <a href="https://www.flaticon.com/free-icons/back" title="back icons">Back icons created by Roundicons - Flaticon</a> */}
                                <p>Back To Cart</p>
                            </div>
                            <div className='CartMainBtn' onClick={() => navigation('/payment')}>
                                <p>Go To Payment</p>
                                <img src={RightArrowIcon} className='CartMainBtnIcon' alt='Arrow Left' />
                                {/* <div> Icons made by <a href="https://www.flaticon.com/authors/roundicons" title="Roundicons"> Roundicons </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a></div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='CheckoutRight'>
                    <div className='CheckoutRightHeader'>
                        <h1>SHOPPING CART</h1>
                    </div>
                    <div className='CheckoutRightMain'>
                        <div className='CheckoutRightDiv'>
                            <div className='CheckoutRightDivImgDiv'>
                                <img src={Hoodie1Img} className='CheckoutRightDivImg' alt='Hoodie' />
                            </div>
                            <div className='CheckoutRightDivText'>
                                <h1>Some nice tee</h1>
                                <div className='CheckoutRightDivText1'>
                                    <p>Size: XL,</p>
                                    <p>Quantity: 2</p>
                                </div>
                            </div>  
                            <div className='CheckoutRightDivTextSmall'>
                                <p>$235.99</p>
                            </div>  
                        </div>
                        <div className='CheckoutRightDiv'>
                            <div className='CheckoutRightDivImgDiv'>
                                <img src={Hoodie1Img} className='CheckoutRightDivImg' alt='Hoodie' />
                            </div>
                            <div className='CheckoutRightDivText'>
                                <h1>Some nice tee</h1>
                                <div className='CheckoutRightDivText1'>
                                    <p>Size: XL,</p>
                                    <p>Quantity: 2</p>
                                </div>
                            </div>  
                            <div className='CheckoutRightDivTextSmall'>
                                <p>$235.99</p>
                            </div>  
                        </div>
                        <div className='CheckoutRightDiv'>
                            <div className='CheckoutRightDivImgDiv'>
                                <img src={Hoodie1Img} className='CheckoutRightDivImg' alt='Hoodie' />
                            </div>
                            <div className='CheckoutRightDivText'>
                                <h1>Some nice tee</h1>
                                <div className='CheckoutRightDivText1'>
                                    <p>Size: XL,</p>
                                    <p>Quantity: 2</p>
                                </div>
                            </div>  
                            <div className='CheckoutRightDivTextSmall'>
                                <p>$235.99</p>
                            </div>  
                        </div>
                        <div className='CheckoutRightDivPrice'>
                            <h2>Total:</h2>
                            <p>$887.99</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckoutScreen
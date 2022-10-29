import React from 'react'
import './PaymentScreen.css'
import Hoodie1Img from '../../static/images/hoodie1.jpg'

const PaymentScreen = () => {
  return (
    <div className='PaymentContainer'>
        <div className='PaymentHeader'>
            <h1>Payment Page</h1>
        </div>
        <div className='PaymentContainer1'>
            <div className='PaymentLeft'>
                <div className='CheckoutRightMain'>
                    <div className='CheckoutRightHeader'>
                        <h1 id='PaymentHeaderH1'>Payment Page</h1>
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
                </div>
            </div>
            <div className='PaymentRight'>
                <div className='PaymentRightDiv'>
                    <h2>Delivery Info</h2>
                    <p>Ksawery Tkaczyk</p>
                    <p>Myśliborska 93c/12</p>
                    <p>03-185, Warszawa</p>
                </div>
                <div className='PaymentRightDiv'>
                    <h2>Payment Method</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PaymentScreen
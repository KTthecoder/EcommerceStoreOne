import React from 'react'
import './PaymentScreen.css'
import useFetchCart from '../../hooks/useFetchCart'
import { useNavigate } from 'react-router-dom'
import useFetchGetAuth from '../../hooks/useFetchGetAuth'
import PaypalCheckoutButton from '../../components/PaypalCheckoutButton'

const PaymentScreen = () => {
    const navigation = useNavigate()
    const { data, total } = useFetchCart()
    const { data: shipping } = useFetchGetAuth('http://127.0.0.1:8000/api/cart/shipping-address/show')

    return (
        <div className='PaymentContainer'>
            <div className='PaymentHeader'>
                <h1>Payment Page</h1>
            </div>
            <div className='PaymentContainer1'>     
                <div className='PaymentLeft'>
                    <div className='CheckoutRightMain'>
                        <div className='ShopHeaderr'>
                            <div className='ShopHeaderLeft'>
                                <h1 id='PaymentHeaderH1'>PAYMENT PAGE</h1>
                            </div>
                        </div>
                        {data && data ? data.map((item) => (
                            <div className='CheckoutRightDiv' key={item.id}>
                                <div className='CheckoutRightDivImgDiv'>
                                    <img src={`http://127.0.0.1:8000${item.product.frontImage}`} className='CheckoutRightDivImg1' alt={item.product.name} />
                                </div>
                                <div className='CheckoutRightDivText'>
                                    <h1>{item.product.name}</h1>
                                    <div className='CheckoutRightDivText1'>
                                        <p>Size: {item.size.toUpperCase()},</p>
                                        <p>Quantity: {item.quantity}</p>
                                    </div>
                                </div>  
                                <div className='CheckoutRightDivTextSmall'>
                                    <p>${item.item_total}</p>
                                </div>  
                            </div>
                        )) : null}
                    </div>
                </div>
                <div className='PaymentRight'>
                    <div className='PaymentRightDiv'>
                        <div className='PaymentRightDivLeft'>
                            <h2>Delivery Info</h2>
                            <p>{shipping && shipping.name} {shipping && shipping.lastName}</p>
                            <p>{shipping && shipping.address}</p>
                            <p>{shipping && shipping.zipcode}, {shipping && shipping.city}</p>
                        </div>
                        <div className='PaymentRightDivRight'>
                            <p onClick={() => navigation('/checkout/edit')} className='PaymentRightDivRightBtn'>Change Address</p>
                        </div>
                    </div>
                    <div className='PaymentRightDiv1'>
                        <h2>Total:</h2>
                        <h2>${total && total}</h2>
                    </div>
                    <div className='PaymentRightDiv'>
                        <h2>Payment Method</h2>
                        {total && <PaypalCheckoutButton totalPrice={total} orderId={data[0].order.id} />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentScreen
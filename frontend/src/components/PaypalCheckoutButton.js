import { PayPalButtons } from '@paypal/react-paypal-js';
import React, { useContext, useEffect, useState } from 'react'
import GetCookie from './GetCookie';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const PaypalCheckoutButton = (props) => {
    const { totalPrice, orderId } = props;
    const [paidFor, setPaidFor] = useState(false)
    const [error, setError] = useState(null)
    const navigate = useNavigate()
    const { accessToken } = useContext(AuthContext)

    const FullFillOrder = async () => {
        const csrftoken = GetCookie('csrftoken');
        let response = await fetch(`http://127.0.0.1:8000/api/payment/${orderId}/accept`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken,
                'Authorization': 'Bearer ' + accessToken
            }
        })
        let data = await response.json()
        if(response.status == 200){
            setPaidFor(true)
            alert("Thank you for your purchase")
            navigate("/")
        }
        else{
            console.log(data)
            setError("Your payment was processed succesfully. However, we are unable to fulfill your purchase. Please contact us.")
            alert(error)
        }
    }

    return (
        <PayPalButtons
            createOrder={(data, actions) => {
                return actions.order.create({
                    purchase_units: [
                        {
                            amount: {
                                value: totalPrice
                            }
                        }
                    ]
                })
            }}
            onApprove={ async (data, actions) => {
                const order = await actions.order.capture()
                console.log("Order: ", order)
                FullFillOrder()
            }}
            onCancel={() => {
                alert("Order Canceled")
                navigate("/cart")
            }}
            onError={(error) => {
                setError(error)
                console.error("PayPal Checkout onError: ", error)
            }}
            
        />
    )
}

export default PaypalCheckoutButton
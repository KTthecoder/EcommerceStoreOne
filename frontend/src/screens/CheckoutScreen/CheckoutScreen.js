import React, { useEffect, useState, useContext } from 'react'
import GetCookie from '../../components/GetCookie'
import './CheckoutScreen.css'
import LeftArrowIcon from '../../static/icons/leftArrow.png'
import RightArrowIcon from '../../static/icons/rightArrow.png'
import { useNavigate } from 'react-router-dom'
import useFetchCart from '../../hooks/useFetchCart'
import { AuthContext } from '../../contexts/AuthProvider'

const CheckoutScreen = () => {
    const navigation = useNavigate()
    const { data, total } = useFetchCart()
    const { accessToken } = useContext(AuthContext)

    useEffect(() => {
        const csrftoken = GetCookie('csrftoken');
        fetch('http://127.0.0.1:8000/api/cart/shipping-address/exists', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken,
                'Authorization' : 'Bearer ' + accessToken
            }
        })
        .then(res => res.json())
        .then((data) => {
            if(data['Response'] === "Shipping Address Exists"){
                navigation('/payment')
            }
        })
        .catch(err => {
            console.log(err.message)
        })
    }, [])

    const ShippingSend = (e) => {
        e.preventDefault()
        fetch('http://127.0.0.1:8000/api/cart/shipping-address', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer ' + accessToken
            },
            body: JSON.stringify({
                name: e.target.name.value,
                lastName: e.target.lastName.value,
                address: e.target.address.value,
                email: e.target.email.value,
                phoneNr: e.target.phoneNr.value,
                city: e.target.city.value,
                zipcode: e.target.zipcode.value,
                order: data[0].order.id,
            })
        })
        .then(res => res.json())
        .then((data) => {
            navigation("/payment")
        })
        .catch(err => {
            alert(err.message)
        }) 
    }

    return (   
        <div className='CheckoutContainer'>
            <div className='CartContainer1'>
                <div className='ShopHeader'>
                    <div className='ShopHeaderLeft'>
                        <h1>CHECKOUT PAGE</h1>
                        <p>{data && data ? Object.keys(data).length : 0} Items</p>
                    </div>
                </div>
            </div>
            <div className='CheckoutContainer1'>
                <form className='CheckoutLeft' method='POST' onSubmit={ShippingSend}>
                    <div className='CheckoutLeftDouble'>
                        <div className='CheckoutLeftDoubleInpDivv'>
                            <p>Name</p>
                            <input type='text' placeholder='Name' className='CheckoutLeftDoubleInp' name='name'/>
                        </div>
                        <div className='CheckoutLeftDoubleInpDivv1'>
                            <p>Last Name</p>
                            <input type='text' placeholder='Last name' className='CheckoutLeftDoubleInp' name='lastName'/>
                        </div>
                    </div>
                    <div className='CheckoutLeftSingle'>
                        <div className='CheckoutLeftSingeInpDiv'>
                            <p>Address</p>
                            <input type='text' placeholder='Address' className='CheckoutLeftSingleInp' name='address'/>
                        </div>
                    </div>
                    <div className='CheckoutLeftDouble'>
                        <div className='CheckoutLeftDoubleInpDiv'>
                            <p>Email</p>
                            <input type='text' placeholder='Email' className='CheckoutLeftDoubleInp' name='email'/>
                        </div>
                        <div className='CheckoutLeftDoubleInpDiv1'>
                            <p>Phone Number</p>
                            <input type='text' placeholder='Phone Number' className='CheckoutLeftDoubleInp' name='phoneNr'/>
                        </div>
                    </div>
                    <div className='CheckoutLeftDouble'>
                        <div className='CheckoutLeftDoubleInpDiv'>
                            <p>City</p>
                            <input type='text' placeholder='City' className='CheckoutLeftDoubleInp' name='city'/>
                        </div>
                        <div className='CheckoutLeftDoubleInpDiv1'>
                            <p>Zip Code</p>
                            <input type='text' placeholder='Zip Code' className='CheckoutLeftDoubleInp' name='zipcode'/>
                        </div>
                    </div>
                    <div className='CheckoutLeftBot'>
                        <div className='CheckoutLeftBotBtnDiv'>
                            <div className='CartMainBtn2' onClick={() => navigation('/cart')}>
                                <img src={LeftArrowIcon} className='CartMainBtnIcon' alt='Arrow Left' />
                                {/* <a href="https://www.flaticon.com/free-icons/back" title="back icons">Back icons created by Roundicons - Flaticon</a> */}
                                <p>Back To Cart</p>
                            </div>
                            <button className='CartMainBtn' type='submit'>
                                <p>Go To Payment</p>
                                <img src={RightArrowIcon} className='CartMainBtnIcon' alt='Arrow Left' />
                                {/* <div> Icons made by <a href="https://www.flaticon.com/authors/roundicons" title="Roundicons"> Roundicons </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a></div> */}
                            </button>
                        </div>
                    </div>
                </form>
                <div className='CheckoutRight'>
                    <div className='CheckoutRightHeader'>
                        <h1>SHOPPING CART</h1>
                    </div>
                    <div className='CheckoutRightMain'>
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
                        )) : navigation('/cart')}
                        <div className='CheckoutRightDivPrice'>
                            <h2>Total:</h2>
                            <p>${total && total ? total : 0}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>     
    )
}

export default CheckoutScreen
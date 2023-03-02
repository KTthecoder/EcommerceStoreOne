import React, { useEffect, useState, useContext } from 'react'
import GetCookie from '../../components/GetCookie'
import './CheckoutEditScreen.css'
import LeftArrowIcon from '../../static/icons/leftArrow.png'
import RightArrowIcon from '../../static/icons/rightArrow.png'
import { useNavigate } from 'react-router-dom'
import useFetchCart from '../../hooks/useFetchCart'
import { AuthContext } from '../../contexts/AuthProvider'

const CheckoutEditScreen = () => {
    const navigation = useNavigate()
    const { data, total } = useFetchCart()
    const { accessToken } = useContext(AuthContext)

    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNr, setPhoneNr] = useState('')
    const [city, setCity] = useState('')
    const [zipCode, setZipCode] = useState('')

    useEffect(() => {
        const csrftoken = GetCookie('csrftoken');
        fetch('http://127.0.0.1:8000/api/cart/shipping-address/edit', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken,
                'Authorization' : 'Bearer ' + accessToken
            }
        })
        .then(res => res.json())
        .then((item) => {
            setName(item.name)
            setLastName(item.lastName)
            setAddress(item.address)
            setEmail(item.email)
            setPhoneNr(item.phoneNr)
            setCity(item.city)
            setZipCode(item.zipcode)
            console.log(item)
        })
        .catch(err => {
            console.log(err.message)
        })
    }, [])

    const ShippingSend = (e) => {
        const csrftoken = GetCookie('csrftoken');
        e.preventDefault()
        fetch('http://127.0.0.1:8000/api/cart/shipping-address/edit', {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken,
                'Authorization' : 'Bearer ' + accessToken
            },
            body: JSON.stringify({
                name: name,
                lastName: lastName,
                address: address,
                email: email,
                phoneNr: phoneNr,
                city: city,
                zipcode: zipCode,
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
                            <input type='text' placeholder='Name' className='CheckoutLeftDoubleInp' name='name' value={name} onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <div className='CheckoutLeftDoubleInpDivv1'>
                            <p>Last Name</p>
                            <input type='text' placeholder='Last name' className='CheckoutLeftDoubleInp' name='lastName'  value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                        </div>
                    </div>
                    <div className='CheckoutLeftSingle'>
                        <div className='CheckoutLeftSingeInpDiv'>
                            <p>Address</p>
                            <input type='text' placeholder='Address' className='CheckoutLeftSingleInp' name='address' value={address} onChange={(e) => setAddress(e.target.value)}/>
                        </div>
                    </div>
                    <div className='CheckoutLeftDouble'>
                        <div className='CheckoutLeftDoubleInpDiv'>
                            <p>Email</p>
                            <input type='text' placeholder='Email' className='CheckoutLeftDoubleInp' name='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className='CheckoutLeftDoubleInpDiv1'>
                            <p>Phone Number</p>
                            <input type='text' placeholder='Phone Number' className='CheckoutLeftDoubleInp' name='phoneNr' value={phoneNr} onChange={(e) => setPhoneNr(e.target.value)}/>
                        </div>
                    </div>
                    <div className='CheckoutLeftDouble'>
                        <div className='CheckoutLeftDoubleInpDiv'>
                            <p>City</p>
                            <input type='text' placeholder='City' className='CheckoutLeftDoubleInp' name='city' value={city} onChange={(e) => setCity(e.target.value)}/>
                        </div>
                        <div className='CheckoutLeftDoubleInpDiv1'>
                            <p>Zip Code</p>
                            <input type='text' placeholder='Zip Code' className='CheckoutLeftDoubleInp' name='zipcode' value={zipCode} onChange={(e) => setZipCode(e.target.value)}/>
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
                        )) : null}
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

export default CheckoutEditScreen
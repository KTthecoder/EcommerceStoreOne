import React from 'react'
import './ProfileScreen.css'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthProvider'
import { Link } from 'react-router-dom'
import useFetchGetAuth from '../../hooks/useFetchGetAuth'

const ProfileScreen = () => {
  const { logoutUser, accessToken } = useContext(AuthContext)
  const { data } = useFetchGetAuth('http://127.0.0.1:8000/api/orders')

  return (
    <div className='ProfileContainer'>
      <div className='CartContainer1'>
        <div className='ShopHeader'>
          <div className='ShopHeaderLeft'>
            <h1>YOUR ACCOUNT</h1>
          </div>
          <button className='ShopHeaderBtn' onClick={() => logoutUser()}>Logout</button>
        </div>
      </div>
      <div className='ProfilepMain'>
        {data && data.map((item) => (
          <Link to={`/account/order/${item.id}`} className='ProfilepMainBlock'>
            <h1>Order #{item.id}</h1>
          </Link> 
        ))}
      </div>
    </div>
  )
}

export default ProfileScreen
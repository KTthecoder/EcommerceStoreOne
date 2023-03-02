import React from 'react'
import './ProfileScreen.css'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthProvider'
import { Link } from 'react-router-dom'

const ProfileScreen = () => {
  const { logoutUser } = useContext(AuthContext)

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
        <Link to={'/account/order/1'} className='ProfilepMainBlock'>
          <h1>#45643</h1>
          {/* <p>$879.78</p> */}
        </Link>
        <Link to={'/account/order/1'} className='ProfilepMainBlock'>
          <h1>#45643</h1>
          {/* <p>$879.78</p> */}
        </Link>
        <Link to={'/account/order/1'} className='ProfilepMainBlock'>
          <h1>#45643</h1>
          {/* <p>$879.78</p> */}
        </Link>
        <Link to={'/account/order/1'} className='ProfilepMainBlock'>
          <h1>#45643</h1>
          {/* <p>$879.78</p> */}
        </Link>
        <Link to={'/account/order/1'} className='ProfilepMainBlock'>
          <h1>#45643</h1>
          {/* <p>$879.78</p> */}
        </Link>
        <Link to={'/account/order/1'} className='ProfilepMainBlock'>
          <h1>#45643</h1>
          {/* <p>$879.78</p> */}
        </Link>
        <Link to={'/account/order/1'} className='ProfilepMainBlock'>
          <h1>#45643</h1>
          {/* <p>$879.78</p> */}
        </Link>
        <Link to={'/account/order/1'} className='ProfilepMainBlock'>
          <h1>#45643</h1>
          {/* <p>$879.78</p> */}
        </Link>
      </div>
    </div>
  )
}

export default ProfileScreen
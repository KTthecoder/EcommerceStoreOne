import React from 'react'
import './ProfileScreen.css'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthProvider'

const ProfileScreen = () => {
  const { logoutUser } = useContext(AuthContext)

  return (
    <div className='ProfileContainer'>
        <div className='CartContainer1'>
            <div className='ShopHeader'>
                <div className='ShopHeaderLeft'>
                    <h1>YOUR ACCOUNT</h1>
                </div>
                <button onClick={() => logoutUser()}>Logout</button>
            </div>
        </div>
    </div>
  )
}

export default ProfileScreen
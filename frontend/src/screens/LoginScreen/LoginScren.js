import React from 'react'
import './LoginScren.css'
import { Link } from 'react-router-dom'

const LoginScren = () => {
  return (
    <div className='LoginContainer'>
        <div className='LoginContainer1'>
            <div className='LoginContainer2'>
                <form className='LoginDiv'>
                    <div className='LoginDivHeader'>
                        <h1>Welcome back!</h1>
                    </div>
                    <div className='LoginInpDiv'>
                        <p>Username</p>
                        <input type='text' className='LoginInp' placeholder='Username' />
                    </div>
                    <div className='LoginInpDiv'>
                        <p>Password</p>
                        <input type='password' className='LoginInp' placeholder='Password' />
                    </div>
                    <div className='LoginBtnDiv'>
                        <button type='submit'>Login</button>
                    </div>
                    <div className='LoginDivInfo'>
                        <p>Don't have account?</p>
                        <Link to='/register' className='LoginDivInfoLink'>Register</Link>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default LoginScren
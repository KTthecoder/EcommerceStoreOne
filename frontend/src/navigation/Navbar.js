import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import SearchIcon from '../static/icons/search.png'
import AccountIcon from '../static/icons/account.png'
import MenuIcon from '../static/icons/menu.png'
import closeIcon from '../static/icons/close.png'
import './Navbar.css'
import useFetchGetAuth from '../hooks/useFetchGetAuth'

export const Navbar = () => {
    const [show, setShow] = useState(false)
    const navigation = useNavigate()
    const location = useLocation()
    const { data } = useFetchGetAuth('http://127.0.0.1:8000/api/order/quantity')

    useEffect(() => {
        setShow(false)
    }, [location])

    return (
        <div className='NavbarContainer'>
            <div className='NavbarContainer1'>
                <div className={show ? 'DrawerNav' : 'DrawerNone'}>
                    <div className='DrawerNavHeader'>
                        <p>Menu</p>
                        <img src={closeIcon} className='DrawerNavHeaderIcon' alt='Close Icon' onClick={() => setShow(false)} />
                        {/* <a href="https://www.flaticon.com/free-icons/close" title="close icons">Close icons created by Pixel perfect - Flaticon</a> */}
                    </div>
                    <div className='DrawerNavMenu'>
                        <div className='NavbarSearchBarr'>
                            <div className='NavbarSearchBar1'>
                                <img src={SearchIcon} className='NavbarSearchRightIcon' alt='Search Icon' />
                                {/* <a href="https://www.flaticon.com/free-icons/search" title="search icons">Search icons created by Royyan Wijaya - Flaticon</a> */}
                                <input type='text' className='NavbarSearchBarInp' placeholder='Search...' />
                            </div>
                        </div>
                        <Link to='/shop' className='DrawerNavMenuLink'>Shop</Link>
                        <Link to='/categories' className='DrawerNavMenuLink'>Categories</Link>
                        <Link to='/newest' className='DrawerNavMenuLink'>Newest</Link>
                        <Link to='/on-sale' className='DrawerNavMenuLink'>On Sale</Link> 
                    </div>
                </div>
                <div className='DrawerNavMenuBtnDiv'>
                    <img src={MenuIcon} className='DrawerNavMenuBtn' alt='Menu Icon' onClick={() => setShow(true)} />
                </div>
                <div className='NavbarLeft'>
                    <Link to='/shop' className='NavbarLeftLink'>Shop</Link>
                    <Link to='/categories' className='NavbarLeftLink'>Categories</Link>
                    <Link to='/newest' className='NavbarLeftLink'>Newest</Link>
                    <Link to='/on-sale' className='NavbarLeftLink'>On Sale</Link>
                </div>
                <div className='NavbarMid'>
                    <div className='NavbarMidLogoDiv'>
                        <a href='/'>EcomShop</a>
                    </div>
                </div>
                <div className='NavbarRight'>
                    <Link to='/cart' className='NavbarRightLinkDiv'>
                        <p className='NavbarRightLink'>Cart</p>
                        <div className='NavbarRightLinkNumber'>
                            <p>{data && data ? Object.keys(data).length : 0}</p>
                        </div>
                    </Link>
                    <Link to='/account' className='NavbarRightIconDiv'>
                        <img src={AccountIcon} className='NavbarRightIcon' alt='Account Icon' />
                        {/* <a href="https://www.flaticon.com/free-icons/user" title="user icons">User icons created by Freepik - Flaticon</a> */}
                    </Link>
                    <div className='NavbarRightIconDiv' id='SearchIcon' onClick={() => navigation('/search')}>
                        <img src={SearchIcon} className='NavbarRightIcon' alt='Search Icon' />
                        {/* <a href="https://www.flaticon.com/free-icons/search" title="search icons">Search icons created by Royyan Wijaya - Flaticon</a> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

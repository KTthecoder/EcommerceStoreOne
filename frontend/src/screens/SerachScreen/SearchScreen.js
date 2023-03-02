import React, { useState, useContext } from 'react'
import GetCookie from '../../components/GetCookie'
import './SearchScreen.css'
import SearchIcon from '../../static/icons/search.png'
import ProductBig from '../../components/ProductBig/ProductBig'
import { FiltersDrawer } from '../../components/FiltersDrawer/FiltersDrawer'
import { AuthContext } from '../../contexts/AuthProvider'

const SearchScreen = () => {
    const [show, setShow] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const [data, setData] = useState(null)
    const [error, setError] = useState('Find Products')

    const { accessToken } = useContext(AuthContext)

    const FindProduct = () => {
        const csrftoken = GetCookie('csrftoken');
        fetch(`http://127.0.0.1:8000/api/search/${searchValue}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken,
                'Authorization' : 'Bearer ' + accessToken
            }
        })
        .then(res => res.json())
        .then((data) => {
            if(data['Error'] === 'ProductModel is empty'){
                setError('This Product Does Not Exists ')
                console.log('error')
                setData(null)
            }
            else{
                setData(data)
            }
            console.log(data)
        })
        .catch(err => {
            console.log(err.message)
        })
    }

    return (
        <div className='ShopContainer'>
            <div className='ShopContainer1'>
                <div className='ShopSearchBar'>
                    <div className='ShopSearchBar1'>
                        <img src={SearchIcon} className='ShopSearchBarIcon' alt='Search Icon' onClick={() => FindProduct()}/>
                        {/* <a href="https://www.flaticon.com/free-icons/search" title="search icons">Search icons created by Royyan Wijaya - Flaticon</a> */}
                        <input type='text' className='ShopSearchBarInp' placeholder='Search...' onKeyDown={(e) => {
                            if(e.key === 'Enter'){
                                FindProduct()
                            }
                        }} value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
                    </div>
                </div>
                <div className='ShopMain'>
                    {data && data ? data.map((item) => (
                        <div key={item.id}>
                            <ProductBig img={item.frontImage} name={item.name} alt={item.alt} normalPrice={item.regularPrice} discountPrice={item.discountPrice} slug={item.slug}/>
                        </div>
                    )) : <h1>No Products</h1>}
                </div>
            </div>
            <FiltersDrawer show={show} setShow={setShow} />
        </div>
    )
}

export default SearchScreen
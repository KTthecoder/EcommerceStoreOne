import React, { useState } from 'react'
import './OnSaleScreen.css'
import FilterIcon from '../../static/icons/filter.png'
import ProductBig from '../../components/ProductBig/ProductBig'
import { FiltersDrawer } from '../../components/FiltersDrawer/FiltersDrawer'
import useFetchGet from '../../hooks/useFetchGet'

const OnSaleScreen = () => {
    const [show, setShow] = useState(false)
    const { data } = useFetchGet('http://127.0.0.1:8000/api/products/on-sale')

    return (
        <div className='ShopContainer'>
            <div className='ShopContainer1'>
                <div className='ShopHeader'>
                    <div className='ShopHeaderLeft'>
                        <h1>PRODUCTS ON SALE</h1>
                        <p>{data && Object.keys(data).length} results</p>
                    </div>
                    <div className='ShopHeaderRight' onClick={() => setShow(true)}>
                        <img src={FilterIcon} className='ShopHeaderRightIcon' alt='Filter Icon' />
                        {/* <a href="https://www.flaticon.com/free-icons/filter" title="filter icons">Filter icons created by herikus - Flaticon</a> */}
                        <p>Filter</p>
                    </div>
                </div>
                <div className='ShopMain'>
                    {data && data.map((item) => (
                        <div key={item.id}>
                            <ProductBig img={item.frontImage} name={item.name} normalPrice={item.regularPrice} discountPrice={item.discountPrice} slug={item.slug}/>
                        </div>
                    ))}
                </div>
            </div>
            <FiltersDrawer show={show} setShow={setShow} />
        </div>
    )
}

export default OnSaleScreen
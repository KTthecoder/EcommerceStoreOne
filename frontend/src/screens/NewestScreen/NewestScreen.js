import React, { useState } from 'react'
import './NewestScreen.css'
import FilterIcon from '../../static/icons/filter.png'
import Tee1Img from '../../static/images/tee1.jpg'
import Hoodie1Img from '../../static/images/hoodie1.jpg'
import Bot1Img from '../../static/images/bot1.jpg'
import wallet1Img from '../../static/images/wallet1.jpg'
import ProductBig from '../../components/ProductBig/ProductBig'
import { FiltersDrawer } from '../../components/FiltersDrawer/FiltersDrawer'

const NewestScreen = () => {
    const [show, setShow] = useState(false)

    return (
        <div className='ShopContainer'>
            <div className='ShopContainer1'>
                <div className='ShopHeader'>
                    <div className='ShopHeaderLeft'>
                        <h1>NEWEST PRODUCTS</h1>
                        <p>12 results</p>
                    </div>
                    <div className='ShopHeaderRight' onClick={() => setShow(true)}>
                        <img src={FilterIcon} className='ShopHeaderRightIcon' alt='Filter Icon' />
                        {/* <a href="https://www.flaticon.com/free-icons/filter" title="filter icons">Filter icons created by herikus - Flaticon</a> */}
                        <p>Filter</p>
                    </div>
                </div>
                <div className='ShopMain'>
                    <ProductBig img={Bot1Img} name="Etiam luctus nisl eu pharetra" price="96.99"/>
                    <ProductBig img={Hoodie1Img} name="Etiam luctus nisl eu pharetra" price="96.99"/>
                    <ProductBig img={Tee1Img} name="Etiam luctus nisl eu pharetra" price="96.99"/>
                    <ProductBig img={Bot1Img} name="Etiam luctus nisl eu pharetra" price="96.99"/>
                    <ProductBig img={wallet1Img} name="Etiam luctus nisl eu pharetra" price="96.99"/>
                    <ProductBig img={Bot1Img} name="Etiam luctus nisl eu pharetra" price="96.99"/>
                    <ProductBig img={Tee1Img} name="Etiam luctus nisl eu pharetra" price="96.99"/>
                    <ProductBig img={Bot1Img} name="Etiam luctus nisl eu pharetra" price="96.99"/>   
                    <ProductBig img={Hoodie1Img} name="Etiam luctus nisl eu pharetra" price="96.99"/>
                    <ProductBig img={Tee1Img} name="Etiam luctus nisl eu pharetra" price="96.99"/>
                    <ProductBig img={Bot1Img} name="Etiam luctus nisl eu pharetra" price="96.99"/>   
                    <ProductBig img={Hoodie1Img} name="Etiam luctus nisl eu pharetra" price="96.99"/>
                    <ProductBig img={Bot1Img} name="Etiam luctus nisl eu pharetra" price="96.99"/>
                    <ProductBig img={Hoodie1Img} name="Etiam luctus nisl eu pharetra" price="96.99"/>
                    <ProductBig img={Tee1Img} name="Etiam luctus nisl eu pharetra" price="96.99"/>
                    <ProductBig img={wallet1Img} name="Etiam luctus nisl eu pharetra" price="96.99"/>
                    <ProductBig img={Bot1Img} name="Etiam luctus nisl eu pharetra" price="96.99"/>
                    <ProductBig img={wallet1Img} name="Etiam luctus nisl eu pharetra" price="96.99"/>
                    <ProductBig img={Hoodie1Img} name="Etiam luctus nisl eu pharetra" price="96.99"/>
                    <ProductBig img={Tee1Img} name="Etiam luctus nisl eu pharetra" price="96.99"/>
                </div>
            </div>
            <FiltersDrawer show={show} setShow={setShow} />
        </div>
    )
}

export default NewestScreen
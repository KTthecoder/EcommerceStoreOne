import React from 'react'
import './ProductDetails.css'
import HoodieImg from '../../static/images/hoodie1.jpg'
import { Link } from 'react-router-dom'
import Product from '../../components/Product/Product'
import Tee1Img from '../../static/images/tee1.jpg'
import Hoodie1Img from '../../static/images/hoodie1.jpg'
import Bot1Img from '../../static/images/bot1.jpg'
import wallet1Img from '../../static/images/wallet1.jpg'
import TruckIcon from '../../static/icons/truck.png'
import ReturnIcon from '../../static/icons/return.png'

const ProductDetails = () => {
  return (
    <div className='DetailsContainer'>
        <div className='DetailsContainer1'>
            <div className='DetailsLeft'>
                <div className='DetailsLeftImgDiv'>
                    <img src={HoodieImg} className='DetailsLeftImg' alt='Hoodie' />
                    <img src={HoodieImg} className='DetailsLeftImg' alt='Hoodie' />
                    <img src={HoodieImg} className='DetailsLeftImg' alt='Hoodie' />
                </div>
            </div>
            <div className='DetailsRight'>
                <div className='DetailsRightSection'>
                    <Link to='/categories' className='DetailsRightLink'>Hoodie</Link>
                </div>
                <div className='DetailsRightSection'>
                    <h1 className='DetailsRightH1'>Some Nice Teee</h1>
                    <p className='DetailsRightPrice'>$245.99</p>
                </div>
                <div className='DetailsRightSection'>
                    <h2 className='DetailsRightH2'>Select Size</h2>
                    <div className='DetailsRightSectionSizes'>
                        <p>S</p>
                        <p>M</p>
                        <p>L</p>
                        <p>XL</p>
                    </div>
                </div>
                <div className='DetailsRightSection'>
                    <button className='DetailsRightBtn1'>Add To Cart</button>
                    <button className='DetailsRightBtn2'>Add To Wishlist</button>
                </div>
                <div className='DetailsRightSection'>
                    <div className='DetailsRightSectionDiv'>
                        <img src={TruckIcon} className='DetailsRightSectionIcon' alt='Truck Icon' />
                        {/* <a href="https://www.flaticon.com/free-icons/delivery" title="delivery icons">Delivery icons created by kosonicon - Flaticon</a> */}
                        <p className='DetailsRightP1'>Order now and we'll deliver in 3 days</p>
                    </div>
                    <div className='DetailsRightSectionDiv'>
                        <img src={ReturnIcon} className='DetailsRightSectionIcon' alt='Truck Icon' />
                        {/* <a href="https://www.flaticon.com/free-icons/return" title="return icons">Return icons created by Freepik - Flaticon</a> */}
                        <p className='DetailsRightP1'>Each product can be returned within 14 days of purchase</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='DetailsContainerMid'>
            <div className='DetailsMidDiv'>
                <h2 className='DetailsRightH22'>Description</h2>
                <p className='DetailsRightP'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra urna at velit varius vehicula. Aliquam eu dui felis. Morbi vel lectus congue ex lobortis tristique. Mauris vel ligula sed ante tincidunt facilisis. Morbi id facilisis quam, quis congue urna. Vivamus sit amet risus sed lorem condimentum pellentesque.</p>
                <p className='DetailsRightP'>&bull; Fusce at nulla iaculis, ullamcorper lectus id, ultrices sapien.</p>
                <p className='DetailsRightP'>&bull; Phasellus ultrices dolor in velit iaculis dictum.</p>
                <p className='DetailsRightP'>&bull; Etiam accumsan posuere orci vitae porta. Morbi malesuada mauris vitae faucibus mattis.</p>
            </div>
        </div>
        {/* <div className='DetailsContainerBot'>
            <div className='DetailsContainerBotHeader'>
                <h1>Other customers also chose</h1>
            </div>
            <div className='DetailsContainerBotMain'>
                <Product img={Bot1Img} name="Etiam luctus nisl eu pharetra" price="96.99"/>
                <Product img={Hoodie1Img} name="Etiam luctus nisl eu pharetra" price="96.99"/>
                <Product img={Tee1Img} name="Etiam luctus nisl eu pharetra" price="96.99"/>
                <Product img={Bot1Img} name="Etiam luctus nisl eu pharetra" price="96.99"/>
                <Product img={wallet1Img} name="Etiam luctus nisl eu pharetra" price="96.99"/>
            </div>
        </div> */}
    </div>
  )
}

export default ProductDetails
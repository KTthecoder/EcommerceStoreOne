import './ProductDetails.css'
import { Link, useParams } from 'react-router-dom'
import TruckIcon from '../../static/icons/truck.png'
import ReturnIcon from '../../static/icons/return.png'
import useFetchGet from '../../hooks/useFetchGet'

const ProductDetails = () => {
    const { slug } = useParams()
    const { data } = useFetchGet(`http://127.0.0.1:8000/api/product/${slug}`)

    return (
        <div className='DetailsContainer'>
            <div className='DetailsContainer1'>
                <div className='DetailsLeft'>
                    <div className='DetailsLeftImgDiv'>
                        {data && data['productimages'].map((item) => (
                            <img src={`http://127.0.0.1:8000${item.image}`} className='DetailsLeftImg' alt={item.alt} key={item.id} />
                        ))}
                    </div>
                </div>
                <div className='DetailsRight'>
                    <div className='DetailsRightSection'>
                        <Link to='/categories' className='DetailsRightLink'>{data && data.categoryName}</Link>
                    </div>
                    <div className='DetailsRightSection'>
                        <h1 className='DetailsRightH1'>{data && data.name}</h1>
                        <div className='DetailsRightDiv'>
                            {data && data.discountPrice ? <p className='DetailsRightPrice1'>${data && data.discountPrice}</p>: <p className='DetailsRightPrice'>${data && data.regularPrice}</p>}
                            {data && data.discountPrice ? <p className='DetailsRightPrice'>${data && data.regularPrice}</p> : null}
                        </div>
                        
                    </div>
                    <div className='DetailsRightSection'>
                        <h2 className='DetailsRightH2'>Select Size</h2>
                        <div className='DetailsRightSectionSizes'>
                            {data && data.isSizeS ? <p>S</p> : <p style={{opacity: 0.5}}>S</p>}
                            {data && data.isSizeM ? <p>M</p> : <p style={{opacity: 0.5}}>M</p>}
                            {data && data.isSizeL ? <p>L</p> : <p style={{opacity: 0.5}}>L</p>}
                            {data && data.isSizeXL ? <p>XL</p> : <p style={{opacity: 0.5}}>XL</p>}
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
                    {/* <p className='DetailsRightP'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra urna at velit varius vehicula. Aliquam eu dui felis. Morbi vel lectus congue ex lobortis tristique. Mauris vel ligula sed ante tincidunt facilisis. Morbi id facilisis quam, quis congue urna. Vivamus sit amet risus sed lorem condimentum pellentesque.</p> */}
                    {/* <p className='DetailsRightP'>&bull; Fusce at nulla iaculis, ullamcorper lectus id, ultrices sapien.</p>
                    <p className='DetailsRightP'>&bull; Phasellus ultrices dolor in velit iaculis dictum.</p>
                    <p className='DetailsRightP'>&bull; Etiam accumsan posuere orci vitae porta. Morbi malesuada mauris vitae faucibus mattis.</p> */}
                    {data && <p className='DetailsRightP'>&bull; {data.description}</p>}
                </div>
            </div>
            {/* <div className='DetailsContainerBot'>
                <div className='DetailsContainerBotHeader'>
                    <h1>Other customers also chose</h1>
                </div>
                <div className='DetailsContainerBotMain'>
                    <Product img={HoodieImg} name="Etiam luctus nisl eu pharetra" price="96.99"/>
                    <Product img={HoodieImg} name="Etiam luctus nisl eu pharetra" price="96.99"/>
                    <Product img={HoodieImg} name="Etiam luctus nisl eu pharetra" price="96.99"/>
                    <Product img={HoodieImg} name="Etiam luctus nisl eu pharetra" price="96.99"/>
                    <Product img={HoodieImg} name="Etiam luctus nisl eu pharetra" price="96.99"/>
                </div>
            </div> */}
        </div>
    )
}

export default ProductDetails
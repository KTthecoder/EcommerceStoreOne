import React from 'react'
import './ProductDetails.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
import TruckIcon from '../../static/icons/truck.png'
import ReturnIcon from '../../static/icons/return.png'
import useFetchGet from '../../hooks/useFetchGet'
import { useState, useContext } from 'react'
import GetCookie from '../../components/GetCookie'
import { AuthContext } from '../../contexts/AuthProvider'
import Product from '../../components/Product/Product'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const ProductDetails = () => {
    const { slug } = useParams()
    const { data } = useFetchGet(`http://127.0.0.1:8000/api/product/${slug}`)
    const [ itemSize, setItemSize ] = useState(null)
    const { accessToken } = useContext(AuthContext)
    const navigation = useNavigate()
    const { data:products } = useFetchGet('http://127.0.0.1:8000/api/product/recommended')
    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)

    const selectSize = (size) => {
        setItemSize(size)
    }

    const AddItemToCart = (productId, size) => {
        if(size){
            const csrftoken = GetCookie('csrftoken');
            fetch(`http://127.0.0.1:8000/api/cart/add/${productId}/${size}`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': csrftoken,
                    'Authorization' : 'Bearer ' + accessToken
                }
            })
            .then((res) => res.json())
            .then((data) => {
                navigation('/cart')
            })
            .catch((err) => console.log(err))
        }
        else{
            alert('Select Size')
        }
        
    }

    return (
        <div className='DetailsContainer'>
            <div className='DetailsContainer1'>
                <div className='DetailsLeft'>
                    <div className='DetailsLeftImgDiv'>
                        {data && <img src={`http://127.0.0.1:8000${data.frontImage}`} className='DetailsLeftImg' alt={data.alt} key={data.id} />}
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
                            {data && data.isSizeS ? <p style={itemSize == 's' ? {backgroundColor: 'rgb(51, 122, 181)', color: 'white'}: {}} onClick={() => selectSize('s')}>S</p> : <p style={{opacity: 0.5}}>S</p>}
                            {data && data.isSizeM ? <p style={itemSize == 'm' ? {backgroundColor: 'rgb(51, 122, 181)', color: 'white'}: {}} onClick={() => selectSize('m')} id='sizeM'>M</p> : <p style={{opacity: 0.5}}>M</p>}
                            {data && data.isSizeL ? <p style={itemSize == 'l' ? {backgroundColor: 'rgb(51, 122, 181)', color: 'white'}: {}} onClick={() => selectSize('l')} id='sizeL'>L</p> : <p style={{opacity: 0.5}}>L</p>}
                            {data && data.isSizeXL ? <p style={itemSize == 'xl' ? {backgroundColor: 'rgb(51, 122, 181)', color: 'white'}: {}} onClick={() => selectSize('xl')} id='sizeXL'>XL</p> : <p style={{opacity: 0.5}}>XL</p>}
                        </div>
                    </div>
                    <div className='DetailsRightSection'>
                        <button className='DetailsRightBtn1' onClick={() => AddItemToCart(data.id, itemSize)}>Add To Cart</button>
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
                    {data && <p className='DetailsRightP'>&bull; {data.description}</p>}
                </div>
            </div>
            <div className='DetailsContainerBot'>
                <div className='DetailsContainerBotHeader'>
                    <h1>Other customers also chose</h1>
                </div>
                <div className='HomeMainSectionMain'>
                    {products && products.map((item) => (
                        <div key={item.id}>
                            <Product img={item.frontImage} name={item.name} normalPrice={item.regularPrice} alt={item.alt} discountPrice={item.discountPrice} slug={item.slug}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
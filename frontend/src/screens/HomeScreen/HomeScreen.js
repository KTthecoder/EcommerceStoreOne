import React from 'react'
import { Link } from 'react-router-dom'
import Product from '../../components/Product/Product'
import './HomeScreen.css'
import CategoryBlock from '../../components/CategoryBlock/CategoryBlock'
import useFetchGet from '../../hooks/useFetchGet'

export const HomeScreen = () => {

  const { data } = useFetchGet('http://127.0.0.1:8000/api/home')

  return (
    <div className='HomeContainer'>
      <div className='HomeHeader'>
          <div className='HomeHeader1'>
            <div className='HomeHeader1Text'>
              <h1>The new collection is available worldwide</h1>
              <p>Create your own style</p>
            </div>
            <div className='HomeHeader1BtnDiv'>
              <Link to='/newest' className='HomeHeader1Btn'>Shop Now</Link>
            </div>
          </div>
      </div>
      <div className='HomeMain'>
        <div className='HomeMain1'>
          <div className='HomeMainSection'>
            <div className='HomeMainSectionHeader'>
              <h2>SHOP BY CATEOGRY</h2>
              <p>Suspendisse vitae mi sed urna tristique pretium sed at nisl. Sed convallis gravida quam, eget tempor augue interdum</p>
            </div>
            <div className='HomeMainSectionDiv'>
              {data && data[0].map((item) => (
                <div key={item.id}>
                  <CategoryBlock img={item.img} name={item.name} slug={item.slug}/>
                </div>
              ))}
            </div>
          </div>
          <div className='HomeMainSection'>
            <div className='HomeMainSectionHeader'>
              <h2>OUR MOST POPULAR PRODUCTS</h2>
              <p>Vestibulum interdum lobortis dolor. Duis a bibendum ante, a maximus nibh. Fusce eleifend enim eget sem auctor, quis scelerisque est mattis.</p>
            </div>
            <div className='HomeMainSectionMain'>
              {data && data[1].map((item) => (
                <div key={item.id}>
                  <Product img={item.frontImage} alt={item.alt} name={item.name} normalPrice={item.regularPrice} discountPrice={item.discountPrice} slug={item.slug}/>
                </div>       
              ))}
            </div>
            <div className='HomeMainSectionFooter'>
              <Link to='/shop' className='HomeMainSectionFooterLink'>See More Products</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

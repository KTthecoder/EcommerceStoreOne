import React from 'react'
import { Link } from 'react-router-dom'
import Product from '../../components/Product/Product'
import './HomeScreen.css'
import Tee1Img from '../../static/images/tee1.jpg'
import Hoodie1Img from '../../static/images/hoodie1.jpg'
import Bot1Img from '../../static/images/bot1.jpg'
import wallet1Img from '../../static/images/wallet1.jpg'
import CategoryBlock from '../../components/CategoryBlock/CategoryBlock'

export const HomeScreen = () => {
  
  return (
    <div className='HomeContainer'>
      <div className='HomeHeader'>
          <div className='HomeHeader1'>
            <div className='HomeHeader1Text'>
              <h1>The new collection is available worldwide</h1>
              <p>Create your own style</p>
            </div>
            <div className='HomeHeader1BtnDiv'>
              <Link to='/' className='HomeHeader1Btn'>Shop Now</Link>
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
              <CategoryBlock img={Tee1Img} name="Tees"/>
              <CategoryBlock img={Hoodie1Img} name="Hoodies"/>
              <CategoryBlock img={Bot1Img} name="Bottoms"/>
              <CategoryBlock img={wallet1Img} name="Accesories"/>
            </div>
          </div>
          <div className='HomeMainSection'>
            <div className='HomeMainSectionHeader'>
              <h2>OUR MOST POPULAR PRODUCTS</h2>
              <p>Vestibulum interdum lobortis dolor. Duis a bibendum ante, a maximus nibh. Fusce eleifend enim eget sem auctor, quis scelerisque est mattis.</p>
            </div>
            <div className='HomeMainSectionMain'>
              <Product img={Bot1Img} name="Etiam luctus nisl eu pharetra" price="96.99"/>
              <Product img={Hoodie1Img} name="Etiam luctus nisl eu pharetra" price="96.99"/>
              <Product img={Tee1Img} name="Etiam luctus nisl eu pharetra" price="96.99"/>
              <Product img={Bot1Img} name="Etiam luctus nisl eu pharetra" price="96.99"/>
              <Product img={wallet1Img} name="Etiam luctus nisl eu pharetra" price="96.99"/>
              <Product img={Bot1Img} name="Etiam luctus nisl eu pharetra" price="96.99"/>
              <Product img={Tee1Img} name="Etiam luctus nisl eu pharetra" price="96.99"/>
              <Product img={Bot1Img} name="Etiam luctus nisl eu pharetra" price="96.99"/>   
              <Product img={wallet1Img} name="Etiam luctus nisl eu pharetra" price="96.99"/>
              <Product img={Hoodie1Img} name="Etiam luctus nisl eu pharetra" price="96.99"/>
            </div>
            <div className='HomeMainSectionFooter'>
              <Link to='/' className='HomeMainSectionFooterLink'>See More Products</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

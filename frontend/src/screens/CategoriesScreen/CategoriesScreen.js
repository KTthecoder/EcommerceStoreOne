import React from 'react'
import './CategoriesScreen.css'
import Tee1Img from '../../static/images/tee1.jpg'
import Hoodie1Img from '../../static/images/hoodie1.jpg'
import Bot1Img from '../../static/images/bot1.jpg'
import wallet1Img from '../../static/images/wallet1.jpg'
import CategoryBlockBig from '../../components/CategoryBlockBig/CategoryBlockBig'

const CategoriesScreen = () => {
  return (
    <div className='CategoriesContainer'>
        <div className='CategoriesContainer1'>
            <div className='CategoriesHeader'>
                <div className='ShopHeaderLeft'>
                    <h1>LIST OF CATEGORIES</h1>
                    <p>4 results</p>
                </div>
                <div className='CategoriesHeaderText'>
                    <p>Vestibulum interdum lobortis dolor. Duis a bibendum ante, a maximus nibh. Fusce eleifend enim eget sem auctor, quis scelerisque est mattis. Aenean ac justo eget neque bibendum venenatis ac eu metus. Ut pretium urna nec leo vulputate, vitae hendrerit nunc posuere. Sed hendrerit est eu lorem sollicitudin, et maximus nunc pellentesque. Mauris dignissim lorem odio, vel sollicitudin est accumsan et. Duis sit amet turpis eu sapien pharetra vestibulum.</p>
                </div>
            </div>
            <div className='CategoriesMain'>
                <CategoryBlockBig img={Tee1Img} name="Tees"/>
                <CategoryBlockBig img={Hoodie1Img} name="Hoodies"/>
                <CategoryBlockBig img={Hoodie1Img} name="Jackets"/>
                <CategoryBlockBig img={Bot1Img} name="Bottoms"/>
                <CategoryBlockBig img={Bot1Img} name="Shoes"/>
                <CategoryBlockBig img={wallet1Img} name="Accesories"/>
            </div>
        </div>
    </div>
  )
}

export default CategoriesScreen
import React from 'react'
import './CategoriesScreen.css'
import Tee1Img from '../../static/images/tee1.jpg'
import CategoryBlockBig from '../../components/CategoryBlockBig/CategoryBlockBig'
import useFetchGet from '../../hooks/useFetchGet'

const CategoriesScreen = () => {
    const { data } = useFetchGet('http://127.0.0.1:8000/api/all-categories')

    return (
        <div className='CategoriesContainer'>
            <div className='CategoriesContainer1'>
                <div className='CategoriesHeader'>
                    <div className='ShopHeaderLeft'>
                        <h1>LIST OF CATEGORIES</h1>
                        <p>{data && Object.keys(data).length} results</p>
                    </div>
                    <div className='CategoriesHeaderText'>
                        <p>Vestibulum interdum lobortis dolor. Duis a bibendum ante, a maximus nibh. Fusce eleifend enim eget sem auctor, quis scelerisque est mattis. Aenean ac justo eget neque bibendum venenatis ac eu metus. Ut pretium urna nec leo vulputate, vitae hendrerit nunc posuere. Sed hendrerit est eu lorem sollicitudin, et maximus nunc pellentesque. Mauris dignissim lorem odio, vel sollicitudin est accumsan et. Duis sit amet turpis eu sapien pharetra vestibulum.</p>
                    </div>
                </div>
                <div className='CategoriesMain'>
                    {data && data.map((item) => (
                        <div key={item.id}>
                            <CategoryBlockBig img={item.img} name={item.name} slug={item.slug}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CategoriesScreen
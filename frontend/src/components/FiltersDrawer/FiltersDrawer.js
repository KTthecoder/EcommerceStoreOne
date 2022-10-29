import React from 'react'
import './FiltersDrawer.css'
import closeIcon from '../../static/icons/close.png'

export const FiltersDrawer = ({show, setShow}) => {
  return (
    <div className={show ? 'FiltersContainer' : 'FiltersNone'}>
        <div className='FiltersHeader'>
            <p>Filter and sort</p>
            <img src={closeIcon} className='FiltersHeaderIcon' alt='Close Icon' onClick={() => setShow(false)} />
            {/* <a href="https://www.flaticon.com/free-icons/close" title="close icons">Close icons created by Pixel perfect - Flaticon</a> */}
        </div>
        <div className='FilterMain'>
            <div className='FilterSection'>
                <h2>Sizes</h2>
                <div className='FilterSectionBlock'>
                    <p>S</p>
                    <p>M</p>
                    <p>L</p>
                    <p>XL</p>
                </div>
            </div>
            <div className='FilterSection'>
                <h2>Colors</h2>
                <div className='FilterSectionBlock'>
                    <p id='FilterWhite'></p>
                    <p id='FilterBlack'></p>
                    <p id='FilterGrey'></p>
                    <p id='FilterBeige'></p>
                    <p id='FilterGreen'></p>
                </div>
            </div>
            <div className='FilterSection'>
                <h2>Sorting Methods</h2>
                <div className='FilterSectionBlock1'>
                    <p>Newest First</p>
                    <p>Price: High To Low</p>
                    <p>Price: Low To High</p>
                </div>
            </div>
        </div>
    </div>
  )
}
   
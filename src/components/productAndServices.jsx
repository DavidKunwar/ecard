import React from 'react';
import SectionTitle from './sectionTitle'
import ProductCard from './productCard';
import astrologyCover from '../Images/astrology2.jpg'
import numerologyCover from '../Images/numerology.jpg'
import hawanCover from '../Images/Hawan.jpeg'

function ProductAndServices() {

    return (
        <div className='section' id='product-and-services'>
            <SectionTitle title='Product and Services' />
            <div className='product-grid-container'>
                <div className='product-grid-item'>
                    <ProductCard
                        img={astrologyCover}
                        name='Horoscope'
                        desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ipsam nostrum velit? Quo, porro velit!'
                    />
                </div>
                <div className='product-grid-item'>
                    <ProductCard
                        img={numerologyCover}
                        name='Gems | Stones | Rings'
                        desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ipsam nostrum velit? Quo, porro velit!'
                    />
                </div>
                <div className='product-grid-item'>
                    <ProductCard
                        img={hawanCover}
                        name='Pooja'
                        desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ipsam nostrum velit? Quo, porro velit!'
                    />
                </div>
                <div className='product-grid-item'>
                    <ProductCard
                        img={numerologyCover}
                        name='Gems | Stones | Rings'
                        desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ipsam nostrum velit? Quo, porro velit!'
                    />
                </div>
            </div>
        </div>
    )
}

export default ProductAndServices
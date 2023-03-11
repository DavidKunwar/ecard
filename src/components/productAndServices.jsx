import React from 'react';
import SectionTitle from './sectionTitle'
import ProductCard from './productCard';
import astrologyCover from '../Images/astrology2.jpg'
import numerologyCover from '../Images/numerology.jpg'
import hawanCover from '../Images/Hawan.jpeg'
import kaalSarpDoshCover from '../Images/snake2.jpeg'
import gemCover from '../Images/gem.jpeg'
import vastuCover from '../Images/vastu.jpeg'
import yantraCover from '../Images/yantr.jpeg'
import teachCover from '../Images/learn.jpeg'

function ProductAndServices() {

    return (
        <div className='section' id='product-and-services'>
            <SectionTitle title='Product and Services' />
            <div className='product-grid-container'>
                <div className='product-grid-item'>
                    <ProductCard
                        img={astrologyCover}
                        name='Consultation'
                        desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ipsam nostrum velit? Quo, porro velit!'
                    />
                </div>
                <div className='product-grid-item'>
                    <ProductCard
                        img={numerologyCover}
                        name='Kundali | Kundali Milan'
                        desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ipsam nostrum velit? Quo, porro velit!'
                    />
                </div>
                <div className='product-grid-item'>
                    <ProductCard
                        img={kaalSarpDoshCover}
                        name='Kaal Sarp Dosh'
                        desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ipsam nostrum velit? Quo, porro velit!'
                    />
                </div>
                <div className='product-grid-item'>
                    <ProductCard
                        img={gemCover}
                        name='Gems | Stones | Rings'
                        desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ipsam nostrum velit? Quo, porro velit!'
                    />
                </div>
                <div className='product-grid-item'>
                    <ProductCard
                        img={hawanCover}
                        name='Grah Shaanti Pooja'
                        desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ipsam nostrum velit? Quo, porro velit!'
                    />
                </div>
                <div className='product-grid-item'>
                    <ProductCard
                        img={vastuCover}
                        name='Vaastu'
                        desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ipsam nostrum velit? Quo, porro velit!'
                    />
                </div>
                <div className='product-grid-item'>
                    <ProductCard
                        img={yantraCover}
                        name='Yantra Shudhi'
                        desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ipsam nostrum velit? Quo, porro velit!'
                    />
                </div>
                <div className='product-grid-item'>
                    <ProductCard
                        img={teachCover}
                        name='Learn Astrology'
                        desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ipsam nostrum velit? Quo, porro velit!'
                    />
                </div>
            </div>
        </div>
    )
}

export default ProductAndServices
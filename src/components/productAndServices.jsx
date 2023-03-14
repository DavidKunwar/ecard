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
                        desc='Personalized astrological analysis regarding personal, professional and married life. Horoscope of 40 days old girl-child will be provided free of charge.'
                    />
                </div>
                <div className='product-grid-item'>
                    <ProductCard
                        img={numerologyCover}
                        name='Kundali | Kundali Milan'
                        desc="Janam kundali and it's detailed analysis. Future prediction regarding different aspect of life."
                    />
                </div>
                <div className='product-grid-item'>
                    <ProductCard
                        img={kaalSarpDoshCover}
                        name='Kaal Sarp Dosh'
                        desc='Kaal Sarp Dosh Nivaaran'
                    />
                </div>
                <div className='product-grid-item'>
                    <ProductCard
                        img={gemCover}
                        name='Gems | Stones | Rings'
                        desc='Rings of emerald, pearl, manik, pukhraj, nilambari pukhraj, neelam, jarkan, diamond, opal, coral, crystal garland, etc. are provided for you well-being.'
                    />
                </div>
                <div className='product-grid-item'>
                    <ProductCard
                        img={hawanCover}
                        name='Grah Shaanti Pooja'
                        desc='Pooja for inauguration of new office space or living space. Also, for family prosperity and well-being.'
                    />
                </div>
                <div className='product-grid-item'>
                    <ProductCard
                        img={vastuCover}
                        name='Vaastu'
                        desc=''
                    />
                </div>
                <div className='product-grid-item'>
                    <ProductCard
                        img={yantraCover}
                        name='Yantra Shudhi'
                        desc=''
                    />
                </div>
                <div className='product-grid-item'>
                    <ProductCard
                        img={teachCover}
                        name='Learn Astrology'
                        desc='For astrology enthusiasts, I share my findings and experience so you can take your knowledge to the next level with my comprehensive teaching service.'
                    />
                </div>
            </div>
        </div>
    )
}

export default ProductAndServices
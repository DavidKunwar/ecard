import React from 'react';
import SectionTitle from './sectionTitle'
import ProductCard from './productCard';

function ProductAndServices(){

    return (
        <div className='section' id='product-and-services'>
            <SectionTitle title='Product and Services' />
            <div className='product-grid-container'>
                <div className='product-grid-item'>
                    <ProductCard
                        img='https://media-exp1.licdn.com/dms/image/C4D0BAQEflByc5pQX2g/company-logo_200_200/0/1644506948234?e=2147483647&v=beta&t=_ttLsMiPPxcg3daomrE-nX-LDlt8CYb0XAPnCo8rLXM'
                        name='Astrology'
                        desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ipsam nostrum velit? Quo, porro velit!'
                    />
                </div>
                <div className='product-grid-item'>
                    <ProductCard
                        img='https://media-exp1.licdn.com/dms/image/C4D0BAQEflByc5pQX2g/company-logo_200_200/0/1644506948234?e=2147483647&v=beta&t=_ttLsMiPPxcg3daomrE-nX-LDlt8CYb0XAPnCo8rLXM'
                        name='Numerology'
                        desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ipsam nostrum velit? Quo, porro velit!'
                    />
                </div>
                <div className='product-grid-item'>
                    <ProductCard
                        img='https://media-exp1.licdn.com/dms/image/C4D0BAQEflByc5pQX2g/company-logo_200_200/0/1644506948234?e=2147483647&v=beta&t=_ttLsMiPPxcg3daomrE-nX-LDlt8CYb0XAPnCo8rLXM'
                        name='Vastu'
                        desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ipsam nostrum velit? Quo, porro velit!'
                    />
                </div>
                <div className='product-grid-item'>
                    <ProductCard
                        img='https://media-exp1.licdn.com/dms/image/C4D0BAQEflByc5pQX2g/company-logo_200_200/0/1644506948234?e=2147483647&v=beta&t=_ttLsMiPPxcg3daomrE-nX-LDlt8CYb0XAPnCo8rLXM'
                        name='Palmistry'
                        desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ipsam nostrum velit? Quo, porro velit!'
                    />
                </div>
            </div>
            {/* <Grid container spacing={2}>
                <Grid item xs={12} sm={4} md={3}>
                    <ProductCard
                        img='https://media-exp1.licdn.com/dms/image/C4D0BAQEflByc5pQX2g/company-logo_200_200/0/1644506948234?e=2147483647&v=beta&t=_ttLsMiPPxcg3daomrE-nX-LDlt8CYb0XAPnCo8rLXM'
                        name='Astrology'
                        desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ipsam nostrum velit? Quo, porro velit!'
                    />
                </Grid>
                <Grid item xs={6} sm={4} md={3}>
                    <ProductCard
                        img='https://media-exp1.licdn.com/dms/image/C4D0BAQEflByc5pQX2g/company-logo_200_200/0/1644506948234?e=2147483647&v=beta&t=_ttLsMiPPxcg3daomrE-nX-LDlt8CYb0XAPnCo8rLXM'
                        name='Numerology'
                        desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ipsam nostrum velit? Quo, porro velit!'
                    />
                </Grid>
                <Grid item xs={6} sm={4} md={3}>
                    <ProductCard
                        img='https://media-exp1.licdn.com/dms/image/C4D0BAQEflByc5pQX2g/company-logo_200_200/0/1644506948234?e=2147483647&v=beta&t=_ttLsMiPPxcg3daomrE-nX-LDlt8CYb0XAPnCo8rLXM'
                        name='Astrology'
                        desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ipsam nostrum velit? Quo, porro velit!'
                    />
                </Grid>
                <Grid item xs={6} sm={4} md={3}>
                    <ProductCard
                        img='https://media-exp1.licdn.com/dms/image/C4D0BAQEflByc5pQX2g/company-logo_200_200/0/1644506948234?e=2147483647&v=beta&t=_ttLsMiPPxcg3daomrE-nX-LDlt8CYb0XAPnCo8rLXM'
                        name='Vastu'
                        desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ipsam nostrum velit? Quo, porro velit!'
                    />
                </Grid>
            </Grid> */}
        </div>
    )
}

export default ProductAndServices
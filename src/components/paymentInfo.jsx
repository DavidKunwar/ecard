import React from 'react'
import SectionTitle from './sectionTitle'
import paytmCover from '../Images/paytm.jpeg'

function PaymentInfo() {

    return (
        <div className='section' id='payment-info'>
            <SectionTitle title='Payment Info' />
            <img src={paytmCover} alt="" />
        </div>
    )
}

export default PaymentInfo
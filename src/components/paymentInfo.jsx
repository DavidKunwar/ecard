import React from 'react'
import SectionTitle from './sectionTitle'
import InfoCard from './infoCard'

function PaymentInfo(){

    const info = [
        {
            field: 'Google Pay',
            text:  '(+91) 9810318660',
        },
        {
            field: 'Paytm',
            text:  '(+91) 9810318660',
        },
        {
            field: 'Phone Pay',
            text:  '(+91) 9810318660',
        },
    ]

    return (
        <div className='section' id='payment-info'>
            <SectionTitle title='Payment Info' />
            <InfoCard info={info} />
        </div>
    )
}

export default PaymentInfo
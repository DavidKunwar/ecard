import React from 'react'
import SectionTitle from './sectionTitle'
import InfoCard from './infoCard'

function BankDetails(){

    const info = [
        {
            field: 'Name',
            text:  'Chander Kant',
        },
        {
            field: 'Account Number',
            text:  '1234567891234',
        },
        {
            field: 'IFSC Code',
            text:  'PUNBJ123456',
        },
        {
            field: 'Bank Name',
            text: 'Punjab National Bank of India'
        },
    ]

    return (
        <div className='section' id='bank-details'>
            <SectionTitle title='Bank Details' />
            <InfoCard info={info} />
        </div>
    )
}

export default BankDetails
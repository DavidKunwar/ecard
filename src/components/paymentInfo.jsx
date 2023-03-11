import React, { useEffect } from 'react'
import SectionTitle from './sectionTitle'

function PaymentInfo() {

    const loadScript = (src) => {
        const form = document.createElement("form")
        const script = document.createElement("script");
        script.src = src;
        script.setAttribute('data-payment_button_id', 'pl_LNPfJEzYT38wxO');
        script.async = true
        script.classList.add('payment-btn');

        form.appendChild(script);
        // document.body.appendChild(form);
        document.getElementById('payment-info').append(form)
    }

    useEffect(() => {
        loadScript("https://checkout.razorpay.com/v1/payment-button.js")
    })

    return (
        <div className='section' id='payment-info'>
            <SectionTitle title='Payment Info' />
            <div></div>
        </div>
    )
}

export default PaymentInfo
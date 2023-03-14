import React, { useState } from 'react'
import LinearProgress from '@mui/material/LinearProgress'
import emailjs from '@emailjs/browser';

function Footer() {

    const date = new Date()
    const [input, setInput] = useState({
        name: '',
        phoneNumber: '',
        dateOfBirth: '',
        timeOfBirth: '',
        placeOfBirth: '',
        query: '',
    })
    const [showProgress, setShowProgress] = useState(false)
    const [helperText, setHelperText] = useState('')

    function onInputChange(event) {
        setInput((prevValue) => {
            return {
                ...prevValue,
                [event.target.name]: event.target.value
            }
        })

        console.log(input)
    }

    function sendEmail(event) {
        event.preventDefault()

        setHelperText('')
        setShowProgress(true)

        emailjs.sendForm('service_k7l0gwp', 'template_qhlqa84', event.target, '_fIjg0s5Kw_TMhSR5')
            .then(() => {
                setHelperText('Thank You ! We will get in touch soon.')
                setShowProgress(false)
            }, (error) => {
                console.log(error.text);
                setHelperText('Something went wrong, try again !')
                setShowProgress(false)
            });
    }

    return (
        <div className='footer'>
            <h3>ASTROSOLUTION</h3>
            <p>
                Got questions to ask, just fill the details below and I will reachout.
            </p>
            <hr />
            <ul>
                <li><a href="#header">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#product-and-services">Products And Services</a></li>
                <li><a href="#payment-info">Payment Info</a></li>
            </ul>
            <form onSubmit={sendEmail}>
                <input onChange={onInputChange} name='name' value={input.name} type="text" placeholder='Name' required />
                <input onChange={onInputChange} name='phoneNumber' value={input.phoneNumber} type="tel" placeholder='Phone Number' required />
                <input onChange={onInputChange} name='dateOfBirth' value={input.dateOfBirth} type="date" placeholder='Date of Birth' required />
                <input onChange={onInputChange} name='timeOfBirth' value={input.timeOfBirth} type="time" placeholder='Time of Birth' required />
                <input onChange={onInputChange} name='placeOfBirth' value={input.placeOfBirth} type="text" placeholder='Place of Birth' required />
                <button type="submit">Send</button>
                {
                    showProgress && <LinearProgress color="inherit" />
                }
                {helperText}
            </form>
            <hr className='bottom-hr' />
            <p className='copyright'>© Copyright {date.getFullYear()} | All Rights Reserved</p>
        </div>
    )
}

export default Footer
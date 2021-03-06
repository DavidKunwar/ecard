import React, { useState } from 'react'
import LinearProgress from '@mui/material/LinearProgress'
import emailjs from '@emailjs/browser';

function Footer(){

    const date = new Date()
    const [input, setInput] = useState({
        name: '',
        email: '',
        query: '',
    })
    const [showProgress, setShowProgress] = useState(false)
    const [helperText, setHelperText] = useState('')

    function onInputChange(event){
        setInput((prevValue) => {
            return {
                ...prevValue,
                [event.target.name] : event.target.value
            }
        })
    }

    function sendEmail(event){
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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, ipsum.</p> 
            <hr />
            <ul>
                <li><a href="#header">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#product-and-services">Products And Services</a></li>
                <li><a href="#payment-info">Payment Info</a></li>
                <li><a href="#bank-details">Bank Details</a></li>
            </ul>
            <form onSubmit={sendEmail}>
                <input onChange={onInputChange} name='name' value={input.name} type="text" placeholder='Name' />
                <input onChange={onInputChange} name='email' value={input.email} type="text" placeholder='Email' />
                <textarea onChange={onInputChange} name='query' value={input.query} cols="30" rows="5" placeholder='Query'></textarea>
                <button type="submit">Send</button>
                {
                    showProgress && <LinearProgress color="inherit" />
                }
                {helperText}
            </form>
            <hr className='bottom-hr' />
            <p className='copyright'>?? Copyright {date.getFullYear()} | All Rights Reserved</p>
        </div>
    )
}

export default Footer
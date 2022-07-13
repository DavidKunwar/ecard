import React, { useState } from 'react'
import axios from 'axios'

function Footer(){

    const date = new Date()
    const [input, setInput] = useState({
        name: '',
        email: '',
        query: '',
    })

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

        axios.post('http://localhost:3001/', input)
        .then((response) => {
            if(response.mailSuccessfull === true){
                console.log('mail sent')
            }
        }).catch((error) => {
            console.log(error)
        })
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
            </form>
            <hr className='bottom-hr' />
            <p className='copyright'>© Copyright {date.getFullYear()} | All Rights Reserved</p>
        </div>
    )
}

export default Footer
import React, { useState } from 'react'
import LinearProgress from '@mui/material/LinearProgress'
import emailjs from '@emailjs/browser';
import Dropdown from './dropdown'

function Footer() {

    // const options = [
    //     { value: "Alabama", label: "Alabama" },
    //     { value: "Alaska", label: "Alaska" },
    //     { value: "red", label: "Red" },
    //     { value: "yellow", label: "Yellow" },
    //     { value: "orange", label: "Orange" },
    //     { value: "pink", label: "Pink" },
    //     { value: "purple", label: "Purple" },
    //     { value: "grey", label: "Grey" }
    // ];

    const options = [
        { name: "Andhra Pradesh, India", label: "Andhra Pradesh, India" },
        { name: "Arunachal Pradesh, India", label: "Arunachal Pradesh, India" },
        { name: "Assam, India", label: "Assam, India" },
        { name: "Bihar, India", label: "Bihar, India" },
        { name: "Chhattisgarh, India", label: "Chhattisgarh, India" },
        { name: "Goa, India", label: "Goa, India" },
        { name: "Gujarat, India", label: "Gujarat, India" },
        { name: "Haryana, India", label: "Haryana, India" },
        { name: "Himachal Pradesh, India", label: "Himachal Pradesh, India" },
        { name: "Jharkhand, India", label: "Jharkhand, India" },
        { name: "Karnataka, India", label: "Karnataka, India" },
        { name: "Kerala, India", label: "Kerala, India" },
        { name: "Madhya Pradesh, India", label: "Madhya Pradesh, India" },
        { name: "Maharashtra, India", label: "Maharashtra, India" },
        { name: "Manipur, India", label: "Manipur, India" },
        { name: "Meghalaya, India", label: "Meghalaya, India" },
        { name: "Mizoram, India", label: "Mizoram, India" },
        { name: "Nagaland, India", label: "Nagaland, India" },
        { name: "Odisha, India", label: "Odisha, India" },
        { name: "Punjab, India", label: "Punjab, India" },
        { name: "Rajasthan, India", label: "Rajasthan, India" },
        { name: "Sikkim, India", label: "Sikkim, India" },
        { name: "Tamil Nadu, India", label: "Tamil Nadu, India" },
        { name: "Telangana, India", label: "Telangana, India" },
        { name: "Tripura, India", label: "Tripura, India" },
        { name: "Uttar Pradesh, India", label: "Uttar Pradesh, India" },
        { name: "Uttarakhand, India", label: "Uttarakhand, India" },
        { name: "West Bengal, India", label: "West Bengal, India" },
        { name: "Alabama, United States", label: "Alabama, United States" },
        { name: "Alaska, United States", label: "Alaska, United States" },
        { name: "Arizona, United States", label: "Arizona, United States" },
        { name: "Arkansas, United States", label: "Arkansas, United States" },
        { name: "California, United States", label: "California, United States" },
        { name: "Colorado, United States", label: "Colorado, United States" },
        { name: "Connecticut, United States", label: "Connecticut, United States" },
        { name: "Delaware, United States", label: "Delaware, United States" },
        { name: "Florida, United States", label: "Florida, United States" },
        { name: "Georgia, United States", label: "Georgia, United States" },
        { name: "Hawaii, United States", label: "Hawaii, United States" },
        { name: "Idaho, United States", label: "Idaho, United States" },
        { name: "Illinois, United States", label: "Illinois, United States" },
        { name: "Indiana, United States", label: "Indiana, United States" },
        { name: "Iowa, United States", label: "Iowa, United States" },
        { name: "Kansas, United States", label: "Kansas, United States" },
        { name: "Kentucky, United States", label: "Kentucky, United States" },
        { name: "Louisiana, United States", label: "Louisiana, United States" },
        { name: "Maine, United States", label: "Maine, United States" },
        { name: "Maryland, United States", label: "Maryland, United States" },
        { name: "Massachusetts, United States", label: "Massachusetts, United States" },
        { name: "Michigan, United States", label: "Michigan, United States" },
        { name: "Minnesota, United States", label: "Minnesota, United States" },
        { name: "Mississippi, United States", label: "Mississippi, United States" },
        { name: "Missouri, United States", label: "Missouri, United States" },
        { name: "Montana, United States", label: "Montana, United States" },
        { name: "Nebraska, United States", label: "Nebraska, United States" },
        { name: "Nevada, United States", label: "Nevada, United States" },
        { name: "New Hampshire, United States", label: "New Hampshire, United States" },
        { name: "New Jersey, United States", label: "New Jersey, United States" },
        { name: "New Mexico, United States", label: "New Mexico, United States" },
        { name: "New York, United States", label: "New York, United States" },
        { name: "North Carolina, United States", label: "North Carolina, United States" },
        { name: "North Dakota, United States", label: "North Dakota, United States" },
        { name: "Ohio, United States", label: "Ohio, United States" },
        { name: "Oklahoma, United States", label: "Oklahoma, United States", }]


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
                <Dropdown
                    isSearchable
                    isMulti
                    placeHolder="Select..."
                    options={options}
                    onChange={(value) => console.log(value)}
                />
                <input onChange={onInputChange} name='name' value={input.name} type="text" placeholder='Name' />
                <input onChange={onInputChange} name='dateOfBirth' value={input.dateOfBirth} type="date" placeholder='Date of Birth' />
                <input onChange={onInputChange} name='placeOfBirth' value={input.placeOfBirth} type="text" placeholder='Place of Birth' />
                <select onChange={onInputChange} name='placeOfBirth' value={input.placeOfBirth}>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                </select>
                <input onChange={onInputChange} name='timeOfBirth' value={input.timeOfBirth} type="time" placeholder='Time of Birth' />
                <input onChange={onInputChange} name='phoneNumber' value={input.phoneNumber} type="tel" placeholder='Phone Number' />
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
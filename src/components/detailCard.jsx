import React from 'react';
import Detail from './detail'
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';

function DetailCard(props){
    return (
        <>
            <div className='detailCard'>
                <Detail icon={<PhoneIcon fontSize='small' className='phoneIcon' />} text='(+91)9810318660' />
                <Detail icon={<EmailIcon fontSize='small' className='emailIcon' />} text='astrosolution@gmail.com' />
                <Detail icon={<LocationOnIcon fontSize='small' className='locationIcon' />} text='L2/20A, Shastri Nagar, New Delhi - 110052' />
            </div>
        </>
    )
}

export default DetailCard
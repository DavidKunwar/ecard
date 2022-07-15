import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PublicIcon from '@mui/icons-material/Public';

function Accessibility(){

    return (
        <>
      <Stack className='button-group1' direction='row' spacing={2} >
        <Button href='tel:+919810318660' target='_blank' color='success' variant='contained' startIcon={<PhoneIcon />} >Call</Button>
        <Button href='https://wa.me/919810318660' target='_blank' color='success' variant='contained' startIcon={<WhatsAppIcon />} >Whatsapp</Button>
        <Button href={`https://www.google.com/maps?q=28.6735963,77.1753279&z=17&hl=en`} target='_blank' color='success' variant='contained' startIcon={<LocationOnIcon />} >Direction</Button>
      </Stack>
      <Stack className='button-group1' direction='row' spacing={2} >
        <Button href='Mailto:astrosolution5231@gmail.com' target='_blank' color='success' variant='contained' startIcon={<EmailIcon />} >Email</Button>
        <Button target='_blank' href='http://www.astrosolutiononline.com/' color='success' variant='contained' startIcon={<PublicIcon />} >Website</Button>
      </Stack>
        </>
    )
}

export default Accessibility
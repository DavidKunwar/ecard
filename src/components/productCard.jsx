import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function ProductCard(props) {

  const message = encodeURI('')
  return (
    <Card sx={{ maxWidth: 1000 }}>
      <CardMedia
        component="img"
        height="250"
        image={props.img}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {props.desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button href={`https://wa.me/919810318660?text=${message}`} size="large">Make an Appointment</Button>
      </CardActions>
    </Card>
  )
}

export default ProductCard
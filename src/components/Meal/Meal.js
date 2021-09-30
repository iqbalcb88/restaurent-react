import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Meal = (props) => {
  console.log(props.meal);
  const {
    strMealThumb,
    strMeal,
    strArea,
    strInstructions,
    strYoutube,
    idMeal,
  } = props.meal;
  console.log(props.key);
  const url = `/itemDetails/${idMeal}`;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component='img'
        height='300'
        image={strMealThumb}
        alt='green iguana'
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          Name: {strMeal} {idMeal}
        </Typography>
        <Typography gutterBottom variant='h5' component='div'>
          Origin: {strArea}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          Instructions: {strInstructions.slice(0, 150)}
        </Typography>
      </CardContent>
      <CardActions>
        <Link style={{ textDecoration: 'none' }} to={url}>
          <Button size='small'>Details</Button>
        </Link>
        <Button size='small'>Share</Button>
      </CardActions>
    </Card>
  );
};

export default Meal;

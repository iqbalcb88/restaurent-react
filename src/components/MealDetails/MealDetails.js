import { Box } from '@mui/system';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import Video from '../Video/Video';
import './MealDetails.css';

const MealDetails = () => {
  const { mealId } = useParams();
  // console.log(mealId);
  const [mealDetails, setMealDetails] = useState({});
  console.log(mealDetails);
  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMealDetails(data.meals[0]));
  }, []);
  const { strInstructions, strMealThumb, strSource, strYoutube } = mealDetails;

  // style

  return (
    <div
      display='flex'
      flexDirection='column'
      justifyContent='center'
      style={{
        backgroundImage: `url(${strMealThumb})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundColor: 'salmon',
        // height: '50vh',
        width: '50%',
        margin: '5% auto',
        height: '100%',
        borderRadius: '15px',
        color: 'white',
        textAlign: 'justify',
        padding: '2%',
        lineHeight: '1.5',
        fontSize: '20px',
      }}
    >
      <div>
        <Video strYoutube={strYoutube} />
      </div>

      <div className='details-text'>
        <p>
          <span fontSize='24px' fontWeight='bolder'>
            Details:
          </span>{' '}
          {strInstructions}
        </p>
        <p>{strSource}</p>
      </div>
    </div>
  );
};

export default MealDetails;

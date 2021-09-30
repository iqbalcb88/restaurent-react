import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import Video from '../Video/Video';

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
  return (
    <div>
      <div>
        <Video strYoutube={strYoutube} />
      </div>

      <div>
        <img src={strMealThumb} alt='' />
      </div>
      <p>Meal Details{strInstructions}</p>
      <p>{strSource}</p>
    </div>
  );
};

export default MealDetails;

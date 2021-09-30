import { TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import Notfound from '../Notfound/Notfound';

const Restaurant = () => {
  const [searchText, setSearchText] = useState('');
  const handleSearch = (e) => {
    const searchTextValue = e.target.value;
    setSearchText(searchTextValue);
  };

  const [meals, setMeals] = useState([]);
  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, [searchText]);

  return (
    <div>
      <Box sx={{ textAlign: 'center' }}>
        <TextField
          sx={{ width: '50%' }}
          onChange={handleSearch}
          // placeholder='Search Your Meal'
          id='outlined-basic'
          label='Search Your Meal'
          variant='outlined'
        />
      </Box>

      <div style={{ margin: '2% 5%' }}>
        <Box display='flex' justifyContent='center' flexWrap='wrap' gap={6}>
          {meals ? (
            meals.map((meal) => <Meal key={meal.idMeal} meal={meal} />)
          ) : (
            <Notfound />
          )}
        </Box>
      </div>
    </div>
  );
};

export default Restaurant;

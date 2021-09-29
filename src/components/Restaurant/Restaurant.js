import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';

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
      <h1>Welcome to React Restaurant</h1>
      <input
        type='text'
        onChange={handleSearch}
        placeholder='Search Your Meal'
        name=''
        id=''
      />
      {meals.map((meal) => (
        <Meal key={meal.idMeal} meal={meal} />
      ))}
    </div>
  );
};

export default Restaurant;

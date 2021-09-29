import React from 'react';

const Meal = (props) => {
  console.log(props.meal);
  const { strMealThumb, strMeal, strArea, strInstructions } = props.meal;
  return (
    <div>
      <div>
        <img src={strMealThumb} alt='' />
      </div>
      <div>
        <h1>
          Name: {strMeal} Origin: {strArea}
        </h1>
        <h5>{strInstructions.slice(0, 120)}</h5>
      </div>
    </div>
  );
};

export default Meal;

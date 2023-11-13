import React, { useState } from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';

const CarbohydrateCalculator = () => {
  const [carbsPer100gFirstFood, setCarbsPer100gFirstFood] = useState(0);
  const [caloriesPer100gFirstFood, setCaloriesPer100gFirstFood] = useState(0);
  const [caloriesPer100gSecondFood, setCaloriesPer100gSecondFood] = useState(0);
  const [desiredGramsFirstFood, setDesiredGramsFirstFood] = useState(0);
  const [result, setResult] = useState(0);

  const calculateSecondFoodAmount = (e) => {
    e.preventDefault();
    
    const caloriesToConsumeFromFirstFood = (desiredGramsFirstFood / 100) * caloriesPer100gFirstFood;

    const gramsOfSecondFood = (caloriesToConsumeFromFirstFood / (caloriesPer100gSecondFood / 100)) * 100;
    setResult(gramsOfSecondFood.toFixed(2));
  };

  return (
    <Aux>
      <h2>Carbohydrate Calculator</h2>
      <form onSubmit={calculateSecondFoodAmount}>
        <label>
          Carbs per 100g - First Food:
          <input
            type="number"
            value={carbsPer100gFirstFood}
            onChange={(e) => setCarbsPer100gFirstFood(parseFloat(e.target.value))}
          />
        </label>
        <br />
        <label>
          Calories per 100g - First Food:
          <input
            type="number"
            value={caloriesPer100gFirstFood}
            onChange={(e) => setCaloriesPer100gFirstFood(parseFloat(e.target.value))}
          />
        </label>
        <br />
        <label>
          Calories per 100g - Second Food:
          <input
            type="number"
            value={caloriesPer100gSecondFood}
            onChange={(e) => setCaloriesPer100gSecondFood(parseFloat(e.target.value))}
          />
        </label>
        <br />
        <label>
          Desired grams - First Food:
          <input
            type="number"
            value={desiredGramsFirstFood}
            onChange={(e) => setDesiredGramsFirstFood(parseFloat(e.target.value))}
          />
        </label>
        <br />
        <button type="submit">Calculate</button>
      </form>
      <br />
      <p>Grams to consume from Second Food: {result}</p>
    </Aux>
  );
};


export default CarbohydrateCalculator;
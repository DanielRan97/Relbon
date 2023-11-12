import React, { useState } from 'react';
import './calculator.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary';


const Calculator = () => {
  const [proteinFirstFood, setProteinFirstFood] = useState('');
  const [caloriesFirstFood, setCaloriesFirstFood] = useState('');
  const [proteinSecondFood, setProteinSecondFood] = useState('');
  const [caloriesSecondFood, setCaloriesSecondFood] = useState('');
  const [gramsToEat, setGramsToEat] = useState('');
  const [result, setResult] = useState('');

  const calculateAllowedGrams = (e) => {
    e.preventDefault();

    const proteinFirst = parseFloat(proteinFirstFood);
    const caloriesFirst = parseFloat(caloriesFirstFood);
    const proteinSecond = parseFloat(proteinSecondFood);
    const caloriesSecond = parseFloat(caloriesSecondFood);
    const gramsDesired = parseFloat(gramsToEat);

    if (isNaN(proteinFirst) || isNaN(caloriesFirst) || isNaN(proteinSecond) || isNaN(caloriesSecond) || isNaN(gramsDesired)) {
      setResult('מלא נכון את הטופס');
      return;
    }

    const allowedProtein = (proteinSecond / proteinFirst) * 100;
    const allowedCalories = (caloriesSecond / caloriesFirst) * 100;
    const allowedFromSecondFood = (allowedProtein / 100) * gramsDesired;

    const resultValue = Math.min(allowedFromSecondFood, allowedCalories);

    setResult(isNaN(resultValue) ? 'Invalid input' : `${resultValue.toFixed(2)}`);
  };

  const resultDiv = () => {
    return(
      result !== '' ?
      <div className="result">
        {result === 'מלא נכון את הטופס' ?
        <strong> {result}  </strong> :
        <strong> : כמות הגרם המותרת של המאכל השני הוא <br/> {result} </strong>

        }

    </div> :
    ''
    );
  }

  const formDiv = () => {

    return(
      <form onSubmit={calculateAllowedGrams}>
      <div className="calculator-container">
        <h2>חישוב כמות אוכל חלופי</h2>
        <div>
          <label>כמות חלבון ב 100 גרם של המאכל הראשון</label>
          <input
            type="text"
            value={proteinFirstFood}
            onChange={(e) => setProteinFirstFood(e.target.value)}
          />
        </div>
        <div>
          <label>כמות קלוריות ב 100 גרם של המאכל הראשון</label>
          <input
            type="text"
            value={caloriesFirstFood}
            onChange={(e) => setCaloriesFirstFood(e.target.value)}
          />
        </div>
        <div>
          <label>כמות חלבון ב 100 גרם של המאכל השני</label>
          <input
            type="text"
            value={proteinSecondFood}
            onChange={(e) => setProteinSecondFood(e.target.value)}
          />
        </div>
        <div>
          <label>כמות קלוריות ב 100 גרם של המאכל השני</label>
          <input
            type="text"
            value={caloriesSecondFood}
            onChange={(e) => setCaloriesSecondFood(e.target.value)}
          />
        </div>
        <div>
          <label>? כמה גרם אתה רוצה לאכול מהמאכל השני</label>
          <input
            type="text"
            value={gramsToEat}
            onChange={(e) => setGramsToEat(e.target.value)}
          />
        </div>
        <button type="submit">לחץ כדי לחשב</button>

        {resultDiv()}
      </div>
    </form>
    )
  }

  return (
    <Aux>
    {formDiv()}
    </Aux>
  );
};

export default Calculator;
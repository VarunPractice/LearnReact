import { useState } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from './Components/FoodItems';
import ErrorMessage from './Components/ErrorMessage';

function App() {
  const [healthyItems, setHealthyItems] = useState(["Sabji", "Banana", "Mango", "PineApple", "Watermelon", "Dragon Fruit", "Papaya"]);

  return (
    <>
      <h1 className='myHeader'>Healthy Food</h1>
      <ErrorMessage items={healthyItems} />
      <FoodItems items={healthyItems} />
    </>
  );
}

export default App;

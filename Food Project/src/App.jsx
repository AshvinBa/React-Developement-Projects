import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import style from './App.module.css'
import './App.css'
import Heading from './Heading'
import ErrorMessage from './ErrorMessage'
import Input from './Input'
import FoodList from './FoodList'
FoodList

function App() {  
  let [foodItem, setFoodItem] = useState([]);

  const onKeyDown = (event) => {
    if(event.key === "Enter")
    {
      let newFoodItem = event.target.value;
      console.log("The New Item Added  "+ newFoodItem);
      setFoodItem([...foodItem , newFoodItem]);
      event.target.value="";
    }
  };

  return (
    <div className={style.container}>
      <Heading></Heading>
      <ErrorMessage items={foodItem}></ErrorMessage>
      <Input handleOnKeyDown = {onKeyDown} ></Input>
      <FoodList items={foodItem}></FoodList>
    </div>
  );
}

export default App

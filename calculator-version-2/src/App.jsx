import style from './App.module.css';
import Display from './components/DisplayName';
import Buttons from './components/Buttons'; // Renamed to Buttons
import './App.css';
import { useState } from 'react';

function App() {
  const [CalVal, setCalVal] = useState("");
  const onButtonClick = (buttonName) => {
    console.log(buttonName)
    if(buttonName === 'C')
      {
        setCalVal("");                
      }
    else if(buttonName === '=')
      {
        const result  = eval(CalVal);
        setCalVal(result); 
      }
    else
      {
        const inputButton = CalVal + buttonName;
        setCalVal(inputButton);
      }
  };

  return (
    <div className={style.calculator}>      
      <Display displayValue={CalVal} />
      <Buttons onButtonClick = {onButtonClick}></Buttons>
    </div>
  );
}

export default App;
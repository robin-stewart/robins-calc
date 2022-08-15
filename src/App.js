import './App.css';
import React, { useState } from 'react';

function App() {
  const [displayValue, setDisplayValue] = useState('');
  const [activeFunction, setActiveFunctionVariable] = useState({
    func: '',
    firstValue: undefined
  });
  const buttonsRow1 = ['7', '8', '9'];
  const buttonsRow2 = ['4', '5', '6'];
  const buttonsRow3 = ['1', '2', '3'];
  const buttonsRow4 = ['0', '.'];
  const functions = {
    Addition: 'addition',
    Subtraction: 'subtraction',
    Multiplication: 'multiplication',
    Division: 'division'
  }

  function addNumber(num) {
    setDisplayValue(displayValue + num);
  }

  function clearDisplayValue() {
    setDisplayValue('');
  }

  function convertPositiveToNegative() {
    setDisplayValue(displayValue * -1);
  }

  function setActiveFunction(func) {
    setActiveFunctionVariable({
      func: func,
      firstValue: displayValue
    });
    clearDisplayValue();
  }

  function calculateResult() {
    switch (activeFunction.func) {
      case functions.Addition:
        setDisplayValue(parseInt(activeFunction.firstValue) + parseInt(displayValue))
        break;
      case functions.Subtraction:
        setDisplayValue(parseInt(activeFunction.firstValue) - parseInt(displayValue))
        break;
      case functions.Multiplication:
        setDisplayValue(parseInt(activeFunction.firstValue) * parseInt(displayValue))
        break;
      case functions.Division:
        setDisplayValue(parseInt(activeFunction.firstValue) / parseInt(displayValue))
        break;
      default:
        console.log('Error calculating the calculator result.')
        break;
    }
    setActiveFunctionVariable({
      func: '',
      firstValue: undefined
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Calculator
        </h1>
      </header>
      <div className='body'>
        <div className='display-value'>
          {displayValue}
        </div>
        <br></br>
        <button className='large-button' type="button" onClick={clearDisplayValue}>Clear</button>
        <button type="button" onClick={convertPositiveToNegative}>+/-</button>
        <button type="button" onClick={() => setActiveFunction(functions.Addition)}
          className={activeFunction.func === functions.Addition ? 'selected' : null}>+</button>
        <br></br>
        {buttonsRow1.map((number, index) => (
          <button type="button" key={index} onClick={() => addNumber(number)}>{number}</button>
        ))}
        <button type="button" onClick={() => setActiveFunction(functions.Subtraction)}
          className={activeFunction.func === functions.Subtraction ? 'selected' : null}>-</button>
        <br></br>
        {buttonsRow2.map((number, index) => (
          <button type="button" key={index} onClick={() => addNumber(number)}>{number}</button>
        ))}
        <button type="button" onClick={() => setActiveFunction(functions.Multiplication)}
          className={activeFunction.func === functions.Multiplication ? 'selected' : null}>x</button>
        <br></br>
        {buttonsRow3.map((number, index) => (
          <button type="button" key={index} onClick={() => addNumber(number)}>{number}</button>
        ))}
        <button type="button" onClick={() => setActiveFunction(functions.Division)}
          className={activeFunction.func === functions.Division ? 'selected' : null}>÷</button>
        <br></br>
        {buttonsRow4.map((number, index) => (
          <button type="button" key={index} onClick={() => addNumber(number)}>{number}</button>
        ))}
        <button className='large-button' type="button" onClick={calculateResult}>=</button>
      </div>
    </div>
  );
}

export default App;

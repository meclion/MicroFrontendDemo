# MicroFrontendDemo
Comparison and practical examples of React component management and MicroFrontEnd implementation.

This is a simple calculator for determining percentages.

By entering the current value, maximum value, and minimum value, then clicking the button, it calculates the percentage for you.

Using a simple code, it demonstrates how to implement a MicroFrontend.



### **The code below is from before the MicroFrontend implementation.**
## Examples
```jsx
import React, { useState } from 'react';
import './App.css';

function App() {
  const [minValue, setMinValue] = useState("");
  const [maxValue, setMaxValue] = useState("");
  const [currentValue, setCurrentValue] = useState("");
  const [result, setResult] = useState(null);

  const calculatePositionPercentage = () => {
    const min = parseFloat(minValue);
    const max = parseFloat(maxValue);
    const current = parseFloat(currentValue);

    if (current < min || current > max) {
      alert("The current value must be between minimum and maximum values.");
      return;
    }

    const percentage = ((current - min) / (max - min)) * 100;
    setResult(percentage);
  };

  return (
    <div className="App">
      <h1>Percentage Calculator</h1>
      <div>
        <label>
          Minimum Value:
          <input
            type="number"
            value={minValue}
            onChange={(e) => setMinValue(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Maximum Value:
          <input
            type="number"
            value={maxValue}
            onChange={(e) => setMaxValue(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Current Value:
          <input
            type="number"
            value={currentValue}
            onChange={(e) => setCurrentValue(e.target.value)}
          />
        </label>
      </div>
      <button onClick={calculatePositionPercentage}>Click Me!</button>
      {result !== null && <div>Result : {result.toFixed(2)}%</div>}
    </div>
  );
}

export default App;
```


### **The code below is from the MicroFrontend implementation.**

## Examples
```jsx
import React, { useState } from "react";
import "./App.css";
import styles from "./App.module.scss";

import Header from "./components/Header";
import InputField from "./components/InputField/index.jsx";
import Button from "./components/Button";

const App = () => {
  const [result, setResult] = useState(null);
  const [maxValue, setMaxValue] = useState("");
  const [minValue, setMinValue] = useState("");
  const [currentValue, setCurrentValue] = useState("");

  const calculateCurrentPositionPercentage = () => {
    const minimum = parseFloat(minValue);
    const maximum = parseFloat(maxValue);
    const current = parseFloat(currentValue);

    if (current < minimum || current > maximum) {
      alert("The current value must be between minimum and maximum values.");
      return;
    }

    const currentPercentageEquation =
      ((current - minimum) / (maximum - minimum)) * 100;
    const currentPercentage = parseFloat(currentPercentageEquation.toFixed(2));
    setResult(currentPercentage);
    console.log("currentPercentage: ", currentPercentage);
  };

  return (
    <div className="App">
      <Header subject="Percentage Calculator" />
      <InputField
        label="Current Value"
        value={currentValue}
        onChange={(e) => setCurrentValue(e.target.value)}
      />
      <InputField
        label="Maximum Value"
        value={maxValue}
        onChange={(e) => setMaxValue(e.target.value)}
      />
      <InputField
        label="Minimum Value"
        value={minValue}
        onChange={(e) => setMinValue(e.target.value)}
      />

      <Button label="Click Me" onClick={calculateCurrentPositionPercentage} />
      {result !== null && (
        <div className={styles.resultField}>Result : {result.toFixed(2)}%</div>
      )}
    </div>
  );
};

export default App;
```

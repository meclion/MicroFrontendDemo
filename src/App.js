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

    const currentPercentage = ((current - minimum) / (maximum - minimum)) * 100;
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

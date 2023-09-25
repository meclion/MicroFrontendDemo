import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [result, setResult] = useState(null);
  const [maxValue, setMaxValue] = useState("");
  const [minValue, setMinValue] = useState("");
  const [currentValue, setCurrentValue] = useState("");

  const calculateCurrentPositionPercentage = () => {
    const min = parseFloat(minValue);
    const max = parseFloat(maxValue);
    const current = parseFloat(currentValue);

    if (current < min || current > max) {
      alert(
        "The current value must be between the minimum and maximum values."
      );
    }

    const currentPercentage = ((current - min) / (max - min)) * 100;
    setResult(currentPercentage);
  };

  return (
    <div className="App">
      <h1>Percentage Calculator</h1>
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
          Current Value:
          <input
            type="number"
            value={currentValue}
            onChange={(e) => setCurrentValue(e.target.value)}
          />
        </label>
      </div>
      <button onClick={calculateCurrentPositionPercentage}>
        Calculate Percentage
      </button>
      {result !== null && <div>Result: {result.toFixed(2)}%</div>}
    </div>
  );
};

export default App;

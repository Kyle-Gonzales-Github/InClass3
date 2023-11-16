import React, { useState } from "react";
import "./MainCSS.css";

function App() {
  const [counter, changeCounter] = useState(0);

  const addTotalNumber = () => {
    changeCounter(counter + 1);
  };

  const minusTotalNumber = () => {
    changeCounter(counter - 1);
  };

  return (
    <div className="App">
      <header>
        <h1>Counter Application for CSI 3150</h1>
      </header>
      <h2>{counter}</h2>
      <div>
        <button class="minusButton" onClick={minusTotalNumber}>
          Decrease Button (-)
        </button>
        <button class="totalButton" onClick={addTotalNumber}>
          Increase Button (+)
        </button>
      </div>
    </div>
  );
}

export default App;

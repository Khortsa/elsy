import React from "react";
import './App.css';
function App() {
  const tempMin = -20;
  const tempMax = 40;
  const heartMin = 80;
  const heartMax = 180;
  const stepsMin = 0;
  const stepsMax = 50000;

  return(
    <div className="container-fluid">
      <div className="row">
        <p>Heart: {heartMin}</p>
        <p>Temperature: {tempMin}</p>
        <p>Steps: {stepsMin}</p>

      </div>
    </div>
  )
}
export default App;
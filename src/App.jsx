
import './App.css'
import { useState } from 'react'


function App() {

  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [bmiStatus, setBmiStatus] = useState("");  
  const [errorMessage, setErrorMessage] = useState("");  


  const calculateBmi = () => {

    const isValidHeight = /^\d+$/.test(height);
    const isValidWeight = /^\d+$/.test(weight);

      if(isValidHeight && isValidWeight){
        const heightInMeters = height / 100;
        const calculatedBmi = weight / (heightInMeters * heightInMeters);
        setBmi(calculatedBmi.toFixed(2));
        if(calculatedBmi < 18.5){
          setBmiStatus("Underweight");
        }
        else if(calculatedBmi >= 18.5 && calculatedBmi < 24.9){
          setBmiStatus("Normal Weight");
        }
        else if(calculatedBmi >= 25 && calculatedBmi < 29.9){
          setBmiStatus("Overweight");
        }
        else{
          setBmiStatus("Obesity");
        }
        setErrorMessage("");
      }
      else{
        setErrorMessage("Please enter valid height and weight");
        setBmi(null);
        setBmiStatus("");
      }
      
  }

  const clearBmi = () => {
    setHeight("");
    setWeight("");
    setBmi(null);
    setBmiStatus("");
    setErrorMessage("");
  }

  return (
    <>
      <div className="bmi-calculator">
        <div className="box"></div>
          <div className="data">
            <h1>BMI Calculator</h1>
           {errorMessage && <p className='error'>{errorMessage}</p>}
            <div className="input-container">
              <label htmlFor="height">Height (CM):</label>
              <input type="text" id='height' value={height} onChange={ (e) => {setHeight(e.target.value)} } />
            </div>
            <div className="input-container">
              <label htmlFor="weight">Weight (KG):</label>
              <input type="text" id='weight' value={weight} onChange={ (e) => {setWeight(e.target.value)} }/>
            </div>
            <button onClick={calculateBmi}>Calculate BMI</button>
            <button onClick={clearBmi}>Clear</button>
            {bmi !== null && (
               <div className='result'>
               <p>Your BMI Is: {bmi}</p>
               <p>Status : {bmiStatus}</p>
             </div>
            )}
          </div>
      </div>
    </>
  )
}

export default App

import React, { useState } from 'react'

import { BmiBody, BmiContainer } from './style'

interface Props {}

const BmiCalculator: React.FC<Props> = ({}) => {
  const [heightvalue, setHeight] = useState(0)
  const [weightvalue, setweight] = useState(0)

  const [resultBmi, setResultBmi] = useState(0)
  const [resultText, setResultText] = useState('')
  const [resultColor, setResultColor] = useState('')
  const [resultDisplay, setResultDisplay] = useState('')

  const calculBmi = () => {
    const bmi = +(weightvalue / Math.pow(heightvalue / 100, 2)).toFixed(1)
    if (bmi < 18.5) {
      setResultText('You are Underweight')
      setResultColor('#ffc44d')
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      setResultText('You are Normal Weight')
      setResultColor('#4AC38D')
    } else if (bmi >= 25 && bmi <= 29.9) {
      setResultText('You are Over Weight')
      setResultColor('#ff884d')
    } else {
      setResultText('You are in the obese range')
      setResultColor('#ff5e57')
    }

    setResultBmi(bmi)
    setResultDisplay('block')
  }

  return (
    <BmiBody>
      <BmiContainer display={resultDisplay}>
        <h2 className="app-title">BMI Calculator</h2>
        <div className="height box">
          <h4>Height (cm)</h4>
          <input
            type="number"
            className="height-input"
            onChange={(e) => {
              setHeight(+e.target.value)
            }}
          />
        </div>
        <div className="weight box">
          <h4>Weight (kg)</h4>
          <input
            type="number"
            className="weight-input"
            onChange={(e) => {
              setweight(+e.target.value)
            }}
          />
        </div>
        <button className="calculate-btn" onClick={calculBmi}>
          Calculate BMI
        </button>
        <div className="result-box">
          <p className="yr-bmi-txt">Your BMI is</p>
          <div className="bmi">
            <h3>{resultBmi}</h3>
          </div>
          <p className="result" color={resultColor}>
            {resultText}
          </p>
        </div>
      </BmiContainer>
    </BmiBody>
  )
}

export default BmiCalculator

import React, { useState } from 'react'
import jsbarcode from 'jsbarcode'

import { BarcodeBody, BarcodeContainer } from './style'

interface Props {}

const BarcodeGenerator: React.FC<Props> = ({}) => {
  const [containerClassName, setContainerClassName] = useState('container')
  const [inputValue, setInputValue] = useState('')

  const generateBarcode = () => {
    setContainerClassName('container active')
    setTimeout(() => {
      jsbarcode('#barcode', inputValue, {
        background: 'white',
        lineColor: 'black',
      })
    }, 200)
  }

  return (
    <BarcodeBody>
      <BarcodeContainer className={containerClassName}>
        <h3 className="app-title">
          <i className="fa-solid fa-barcode"></i> Barcode Generator
        </h3>
        <input
          type="text"
          className="userInput"
          placeholder="Enter text or url"
          onChange={(e) => {
            setInputValue(e.target.value)
          }}
        />
        <button className="generate-btn" onClick={generateBarcode}>
          Generate
        </button>
        <div className="barcode-box">
          <svg id="barcode"></svg>
        </div>
      </BarcodeContainer>
    </BarcodeBody>
  )
}

export default BarcodeGenerator

import React, { useState } from 'react'

import { CurrencyConverterBody, CurrencyConverterContainer } from './style'
import { countryList } from './countryList'

interface props {}

const CurrencyConverter: React.FC<props> = ({}) => {
  const [fromInputActive, setFromInputActive] = useState(false)
  const [toInputActive, setToInputActive] = useState(false)

  // const getSymbols = () => {
  //   let fromLi = ''
  //   let toLi = ''
  //   for (currency_code in country_list) {
  //     fromLi += `<li onclick="getFromValue('${currency_code}')"><img src="https://flagsapi.com/${country_list[currency_code]}/flat/64.png" alt="">${currency_code}</li>`
  //     toLi += `<li onclick="getToValue('${currency_code}')"><img src="https://flagsapi.com/${country_list[currency_code]}/flat/64.png" alt="">${currency_code}</li>`
  //   }
  //   fromOptionsBox.innerHTML = fromLi
  //   toOptionsBox.innerHTML = toLi
  // }

  // const getFromValue = (country) => {
  //   fromInputFlag.src = `https://flagsapi.com/${country_list[country]}/flat/64.png`
  //   fromInput.value = country
  //   fromOptionsBox.classList.remove('active')
  // }

  return (
    <CurrencyConverterBody>
      <CurrencyConverterContainer>
        <img src="exchange.png" alt="" />
        <h3 className="app-title">Currency Converter</h3>
        <div className="amount">
          <h3>Enter Amount</h3>
          <input type="number" className="user-amount" value="1" />
        </div>
        <div className="from-to">
          <div className="from">
            <h3>From</h3>
            <div
              className="from-input"
              onClick={() => {
                setFromInputActive(true)
                setToInputActive(false)
              }}
            >
              <div className="from-flag">
                <img
                  src="https://flagsapi.com/US/flat/64.png"
                  alt=""
                  className=""
                />
              </div>
              <input type="text" name="" id="" value="USD" readOnly />
              <i className="fa-solid fa-chevron-down"></i>
            </div>
            <div
              className={
                fromInputActive
                  ? 'from-country-options active'
                  : 'from-country-options'
              }
            >
              {/* {Object.keys(countryList).map((key) => {
                return (
                  // <li onClick={() => getFromValue(key)}>
                  //   <img
                  //     src="https://flagsapi.com/${country_list[currency_code]}/flat/64.png"
                  //     alt=""
                  //   />
                  //   {key}
                  // </li>
                )
              })} */}
            </div>
          </div>
          <div className="switch-btn">
            <i className="fa-solid fa-right-left"></i>
          </div>
          <div className="to">
            <h3>To</h3>
            <div
              className="to-input"
              onClick={() => {
                setFromInputActive(false)
                setToInputActive(true)
              }}
            >
              <div className="to-flag">
                <img
                  src="https://flagsapi.com/IN/flat/64.png"
                  alt=""
                  className=""
                />
              </div>
              <input type="text" name="" id="" value="INR" readOnly />
              <i className="fa-solid fa-chevron-down"></i>
            </div>
            <div
              className={
                toInputActive
                  ? 'to-country-options active'
                  : 'to-country-options'
              }
            >
              {/* {countryList.map((v) => (
                <li onClick="getFromValue('${currency_code}')">
                  <img
                    src="https://flagsapi.com/${country_list[currency_code]}/flat/64.png"
                    alt=""
                  />
                  ${currency_code}
                </li>
              ))} */}
            </div>
          </div>
        </div>
        <button className="convert-btn">Get Exchange Rate</button>
        <div className="result-box">
          <h3 className="result">100 USD = 861.11 INR</h3>
        </div>
      </CurrencyConverterContainer>
    </CurrencyConverterBody>
  )
}

export default CurrencyConverter

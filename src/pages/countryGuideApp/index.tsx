import React, { useEffect, useState } from 'react'

import { CountryGuideBody, CountryGuideContainer } from './style'

interface props {}

interface ApiResponse {
  name: { common: string }
  capital: string
  continents: string
  population: string
  currencies: any
  languages: any
  flags: any
}

interface Currency {
  name: ''
  symbol: ''
}

const CountryGuids: React.FC<props> = ({}) => {
  const [country, setCountry] = useState('India')
  const [infoBoxSuc, setInfoBoxSuc] = useState(false)
  const [infoBoxFail, setInfoBoxFail] = useState(false)
  const [countryData, setCountryData] = useState<ApiResponse>({
    name: { common: '' },
    capital: '',
    continents: '',
    population: '',
    currencies: {},
    languages: {},
    flags: {},
  })
  const [currencie, setCurrencies] = useState<Currency>({
    name: '',
    symbol: '',
  })

  useEffect(() => {
    getCountryInfo(country)
  }, [])

  const getCountryInfo = (country: any) => {
    const url = `https://restcountries.com/v3.1/name/${country}?fullText=true`
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setInfoBoxFail(false)
        setInfoBoxSuc(true)
        setCountryData(data[0])
        const currency = Object.keys(data[0].currencies)[0]
        const currencyData = {
          name: data[0].currencies[currency].name,
          symbol: data[0].currencies[currency].symbol,
        }
        setCurrencies(currencyData)
        console.log(data)
      })
      .catch((e) => {
        if (country.length === 0) {
          alert('Input field cannot be empty!')
        } else {
          setInfoBoxSuc(false)
          setInfoBoxFail(true)
        }
      })
  }

  return (
    <CountryGuideBody>
      <CountryGuideContainer>
        <div className="search-box">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            className="userInput"
            placeholder="Enter country name.."
            value={country}
            onKeyUp={(e) => {
              if (e.key === 'Enter' && country) {
                getCountryInfo(country)
              }
            }}
            onChange={(e) => {
              setCountry(e.target.value)
            }}
          />
        </div>
        <div className="info-box">
          {infoBoxSuc && (
            <>
              <div className="flag-and-name">
                <div className="flag">
                  <img src={countryData.flags.svg} alt="" />
                </div>
                <h3 className="country-name">{countryData.name.common}</h3>
              </div>
              <div className="other-info">
                <h5>
                  Capital: <span>{countryData.capital}</span>
                </h5>
                <h5>
                  Continent: <span>{countryData.continents}</span>
                </h5>
                <h5>
                  Population: <span>{countryData.population}</span>
                </h5>
                <h5>
                  Currency:{' '}
                  <span>
                    {Object.keys(countryData.currencies)[0]} - {currencie.name}{' '}
                    ({currencie.symbol})
                  </span>
                </h5>
                <h5>
                  Common Languages:{' '}
                  <span>{Object.values(countryData.languages).join(',')}</span>
                </h5>
              </div>
            </>
          )}
          {infoBoxFail && (
            <>
              <h3 className="invalid-name-message">
                Please enter valid country name!{' '}
              </h3>
            </>
          )}
        </div>
      </CountryGuideContainer>
    </CountryGuideBody>
  )
}

export default CountryGuids

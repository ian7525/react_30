import React from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'

import Landing from './pages/landing'
import AgeCalculator from './pages/ageCalculator'
import AnologClock from './pages/anologClock'
import BarcodeGenerator from './pages/barcodeGenerator'
import BmiCalculator from './pages/bmiCalculator'
import BoxShadowGenerator from './pages/boxShadowGenerator'
import CocktailSearch from './pages/cocktail'
import CountryGuide from './pages/countryGuideApp'
import CurrencyConverter from './pages/currencyConverter'

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/"></Link>
            </li>
            <li>
              <Link to="/age">Age Calculator</Link>
            </li>
            <li>
              <Link to="/analog-clock">Analog Clock</Link>
            </li>
            <li>
              <Link to="/barcode">Barcode Generator</Link>
            </li>
            <li>
              <Link to="/bmi">BMI Calculator</Link>
            </li>
            <li>
              <Link to="/box-shadow">Box Shadow Generator</Link>
            </li>
            <li>
              <Link to="/cocktail">Cocktail Search App</Link>
            </li>
            <li>
              <Link to="/country-guide">Country Guide App</Link>
            </li>
            <li>
              <Link to="/currency-converter">Currency Converter</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/age" element={<AgeCalculator />} />
          <Route path="/analog-clock" element={<AnologClock />} />
          <Route path="/barcode" element={<BarcodeGenerator />} />
          <Route path="/bmi" element={<BmiCalculator />} />
          <Route path="/box-shadow" element={<BoxShadowGenerator />} />
          <Route path="/cocktail" element={<CocktailSearch />} />
          <Route path="/country-guide" element={<CountryGuide />} />
          <Route path="/currency-converter" element={<CurrencyConverter />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

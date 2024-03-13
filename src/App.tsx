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
import DigitalClock from './pages/digitalClock'
import DynamicCalender from './pages/dynamicCalender'
import GithubProfileSearch from './pages/githubProfileSearch'
import GuessNumberGame from './pages/guessNumberGame'
import HangmanGame from './pages/hangmanGame'
import InterestCalculator from './pages/interestCalculator'
import LanguageTranslator from './pages/languageTranslator'
import MemoryCardGame from './pages/memoryCardGame'
import MovieInfo from './pages/movieInfo'
import MusicPlayerWithWaveform from './pages/musicPlayerWithWaveform'
import PasswordGenerator from './pages/passwordGenerator'
import QrcodeGenerator from './pages/qrcodeGenerator'
import QuizApp from './pages/quizApp'
import RandomJokeGenerator from './pages/randomJokeGenerator'
import RandomQuoteGenerator from './pages/randomQuoteGenerator'
import RecipeApp from './pages/recipeApp'
import RockPaperScissor from './pages/rockPaperScissor'
import ScientificCalculator from './pages/scientificCalculator'
import SimpleCalculator from './pages/simpleCalculator'
import StopWatch from './pages/stopWatch'
import TodoApp from './pages/todoApp'
import WeatherApp from './pages/weatherApp'

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
            <li>
              <Link to="/digital-clock">Digital Clock</Link>
            </li>
            <li>
              <Link to="/dynamic-calender">Dynamic Calender</Link>
            </li>
            <li>
              <Link to="/github-profile">Github Profile Search</Link>
            </li>
            <li>
              <Link to="/guess-number">Guess Number Game</Link>
            </li>
            <li>
              <Link to="/hangman">Hangman Game</Link>
            </li>
            <li>
              <Link to="/interest-calculator">Interest Calculator</Link>
            </li>
            <li>
              <Link to="/languatge-translator">Language Translator</Link>
            </li>
            <li>
              <Link to="/memory-card">Memory Card Game</Link>
            </li>
            <li>
              <Link to="/movie-info">Movie Info</Link>
            </li>
            <li>
              <Link to="/music-player">Music Player with WaveForm</Link>
            </li>
            <li>
              <Link to="/password-generator">Password Generator</Link>
            </li>
            <li>
              <Link to="/qrcode-generator">QRCode Generator</Link>
            </li>
            <li>
              <Link to="/quiz">Quiz App</Link>
            </li>
            <li>
              <Link to="/random-joke-generator">Random Joke Generator</Link>
            </li>
            <li>
              <Link to="/random-quote-generator">Random Quote Generator</Link>
            </li>
            <li>
              <Link to="/recipe">Recipe App</Link>
            </li>
            <li>
              <Link to="/rock-paper-scissor">Rock Paper Scissor</Link>
            </li>
            <li>
              <Link to="/scientific-calculator">Scientific Calculator</Link>
            </li>
            <li>
              <Link to="/simple-calculator">Simple Calculator</Link>
            </li>
            <li>
              <Link to="/stop-watch">StopWatch</Link>
            </li>
            <li>
              <Link to="/todo">TodoApp</Link>
            </li>
            <li>
              <Link to="/weather">WeatherApp</Link>
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
          <Route path="/digital-clock" element={<DigitalClock />} />
          <Route path="/dynamic-calender" element={<DynamicCalender />} />
          <Route path="/github-profile" element={<GithubProfileSearch />} />
          <Route path="/guess-number" element={<GuessNumberGame />} />
          <Route path="/hangman" element={<HangmanGame />} />
          <Route path="/interest-calculator" element={<InterestCalculator />} />
          <Route
            path="/languatge-translator"
            element={<LanguageTranslator />}
          />
          <Route path="/memory-card" element={<MemoryCardGame />} />
          <Route path="/movie-info" element={<MovieInfo />} />
          <Route path="/music-player" element={<MusicPlayerWithWaveform />} />
          <Route path="/password-generator" element={<PasswordGenerator />} />
          <Route path="/qrcode-generator" element={<QrcodeGenerator />} />
          <Route path="/quiz" element={<QuizApp />} />
          <Route
            path="/random-joke-generator"
            element={<RandomJokeGenerator />}
          />
          <Route
            path="/random-quote-generator"
            element={<RandomQuoteGenerator />}
          />
          <Route path="/recipe" element={<RecipeApp />} />
          <Route path="/rock-paper-scissor" element={<RockPaperScissor />} />
          <Route
            path="/scientific-calculator"
            element={<ScientificCalculator />}
          />
          <Route path="/simple-calculator" element={<SimpleCalculator />} />
          <Route path="/stop-watch" element={<StopWatch />} />
          <Route path="/todo" element={<TodoApp />} />
          <Route path="/weather" element={<WeatherApp />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

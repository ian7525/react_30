import React from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'

import Landing from './pages/landing'
import AgeCalculator from './pages/ageCalculator'
import AnologClock from './pages/anologClock'

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/"></Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/age" element={<AgeCalculator />} />
          <Route path="/anolog-clock" element={<AnologClock />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

import React, { useState, useEffect } from 'react'

import { Form, Field } from 'react-final-form'

import {
  AnologClockBody,
  AnologClockContainer,
  AnologClockSecondHand,
  AnologClockMinHand,
  AnologClockHourHand,
} from './style'

interface Props {}

const AnologClock: React.FC<Props> = ({}) => {
  const [hourRotateZ, setHourTotateZ] = useState(0)
  const [minRotateZ, setMinTotateZ] = useState(0)
  const [secRotateZ, setSecTotateZ] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      const deg = 6
      const day = new Date()
      const hh = day.getHours() * 30
      const mm = day.getMinutes() * deg
      const ss = day.getSeconds() * deg
      setHourTotateZ(hh + mm / 12)
      setMinTotateZ(mm)
      setSecTotateZ(ss)
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <AnologClockBody>
      <AnologClockContainer>
        <div className="pre-container">
          <div className="centernut"></div>
          <div className="indicator">
            <div></div>
            <div></div>
            <div>3</div>
            <div></div>
            <div></div>
            <div>6</div>
            <div></div>
            <div></div>
            <div>9</div>
            <div></div>
            <div></div>
            <div>12</div>
          </div>
          <AnologClockSecondHand rotateZ={secRotateZ}></AnologClockSecondHand>
          <AnologClockMinHand rotateZ={minRotateZ}></AnologClockMinHand>
          <AnologClockHourHand rotateZ={hourRotateZ}></AnologClockHourHand>
        </div>
      </AnologClockContainer>
    </AnologClockBody>
  )
}

export default AnologClock

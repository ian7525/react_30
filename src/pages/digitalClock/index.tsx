import React, { useState } from 'react'

import { DigitalClockBody, DigitalClockWrapper } from './style'

interface Props {}

const DigitalClock: React.FC<Props> = ({}) => {
  return (
    <DigitalClockBody>
      <DigitalClockWrapper>
        <button className="toggle-btn">
          <i className="fa-regular fa-sun"></i>
        </button>
        <div className="pre-wrapper">
          <div className="weeks"></div>
          <i className="fa-regular fa-clock"></i>
          <div className="timer">
            <span className="hour">12</span>
            <span>:</span>
            <span className="minute">36</span>
            <span>:</span>
            <span className="second">59</span>
          </div>
          <div className="am-pm">
            <h6 className="am">AM</h6>
            <h6 className="pm">PM</h6>
          </div>
        </div>
      </DigitalClockWrapper>
    </DigitalClockBody>
  )
}

export default DigitalClock

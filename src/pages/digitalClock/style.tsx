import styled from 'styled-components'

export const DigitalClockBody = styled.body`
  background: #cbd5de;
  font-family: 'Orbitron', sans-serif;
`

export const DigitalClockWrapper = styled.div`
  height: 200px;
  width: 370px;
  border-radius: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #272e38;
  transition: all 0.2s;

  .pre-wrapper {
    height: 95px;
    width: 290px;
    background: #0f1620;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.2s;

    .weeks {
      height: 30px;
      padding: 5px;
      margin-top: 2px;

      span {
        color: red;
        font-size: 11.3px;
        margin-left: 11px;
        color: dimgrey;
        font-weight: 500;
        transition: all 0.2s;
      }

      span.curr-day {
        color: white;
        text-shadow: 0 0 2px #fff;
        font-weight: 600;
        transition: all 0.2s;
      }
    }

    .timer {
      height: 55px;
      width: 220px;
      margin-top: 2px;
      margin-left: 35px;
      text-align: center;
      font-weight: 500;
      font-weight: 600;

      span {
        color: white;
        margin-left: 3px;
        font-size: 35px;
        position: relative;
        top: 3px;
        text-shadow: 0 0 2px #fff;
        transition: all 0.2s;
      }
    }

    .fa-clock {
      position: absolute;
      left: 15px;
      bottom: 23px;
      color: white;
      font-size: 15px;
      text-shadow: 0 0 2px #fff;
      transition: all 0.2s;
    }

    .am-pm {
      height: 25px;
      width: 30px;
      color: dimgrey;
      text-align: center;
      position: absolute;
      right: 9px;
      bottom: 20px;
      font-size: 13px;
      transition: all 0.2s;

      h6.curr-time-period {
        color: white;
        text-shadow: 0 0 2px #fff;
        transition: all 0.2s;
      }
    }
  }
`

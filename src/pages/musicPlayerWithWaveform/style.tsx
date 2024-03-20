import styled from 'styled-components'

export const Body = styled.body`
  background: #c4d1f1;
  font-family: 'poppins', sans-serif;
`

export const Container = styled.div`
  padding: 25px;
  width: 360px;
  background: #ffffff;
  border-radius: 6px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 360px;
  overflow: hidden;
  .music-info {
    height: 100px;
    width: 100%;
    background: rgba(84, 103, 255, 0.2);
    position: absolute;
    top: 0;
    left: 0;
    padding: 23px;
    padding-left: 170px;
    font-size: 14.5px;
    text-transform: capitalize;
    h4 {
      font-weight: 500;
      margin-top: 6px;
      color: dimgrey;
      white-space: nowrap;
      span {
        color: #5467ff;
      }
    }
  }
  .img-box {
    height: 110px;
    width: 110px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    z-index: 1;
    position: absolute;
    margin-top: 23px;
    img {
      height: 100px;
      width: 100px;
      border-radius: 100%;
    }
  }
  .btns-box {
    height: 70px;
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 20px;
    margin-top: 80px;
    button {
      all: unset;
      height: 35px;
      width: 35px;
      border-radius: 100%;
      border: 1px solid #5467ff;
      display: flex;
      align-items: center;
      justify-content: center;
      float: left;
      margin-left: 14px;
      color: #5467ff;
      cursor: pointer;
      position: relative;
      left: -5px;
      font-size: 13px;
    }
    .play-pause-btn {
      background: #5467ff;
      color: white;
      height: 45px;
      width: 45px;
      font-size: 15px;
    }
  }
  .waveform-box {
    position: absolute;
    top: 195px;
    padding: 20px;
    height: 100px;
    display: flex;
    align-items: center;
    margin-left: -2px;
    .current-time {
      position: relative;
      left: -10px;
      font-size: 13px;
      color: #31456a;
    }
    .total-time {
      position: relative;
      left: 10px;
      font-size: 13px;
      color: #31456a;
    }
    #waveform {
      height: 92px;
      width: 235px;
    }
  }

  .volume-box {
    height: 60px;
    width: 300px;
    padding: 20px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 20px;
    padding-right: 0px;
    margin-left: 15px;
    .volume-icon {
      font-size: 20px;
      color: #31456a;
      position: relative;
      left: -25px;
      cursor: pointer;
    }
    .volume-btn {
      height: 18px;
      width: 18px;
      border-radius: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 9px;
      cursor: pointer;
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
      cursor: pointer;
      position: relative;
      left: -14px;
      background: rgba(84, 103, 255, 0.2);
    }
    .volume-incre {
      margin-left: 22px;
    }
    input {
      all: unset;
      height: 3px;
      width: 130px;
      background: lightgrey;
      margin-left: -6px;
      cursor: pointer;
      &::-webkit-slider-thumb {
        -webkit-appearance: none;
        height: 10px;
        width: 10px;
        background: #5467ff;
        border-radius: 100%;
        cursor: pointer;
      }
    }
  }
`

export const GlobalStyles = styled.div`
  .rotate {
    animation: animate 8s linear infinite;
  }
  @keyframes animate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  ::selection {
    background: rgb(100, 149, 237, 0.8);
    color: white;
  }
`

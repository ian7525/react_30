import styled from 'styled-components'

export const Body = styled.body`
  background: #bbcedf;
  font-family: 'poppins', sans-serif;
`

export const Container = styled.div`
  padding: 20px;
  width: 360px;
  background: #3a3e4a;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .search-box {
    padding: 5px;
    height: 50px;
    background: #19202a;
    border-radius: 30px;
    display: flex;
    align-items: center;

    i {
      color: grey;
      position: relative;
      left: 14px;
      font-size: 14px;
    }

    input {
      all: unset;
      height: 50px;
      position: relative;
      left: 25px;
      font-size: 14px;
      border-top-right-radius: 30px;
      border-bottom-right-radius: 30px;
      color: lightgrey;
    }
  }

  .weather-info-box {
    background: linear-gradient(135deg, #62b8f5, #4475ef);
    border-radius: 15px;
    padding: 20px;
    width: 100%;
    margin-top: 15px;

    .location {
      text-align: center;
      font-size: 13px;
      margin-top: -2px;
      color: white;

      i {
        font-size: 11px;
        padding-right: 3px;
      }
    }

    .weather-img {
      height: 130px;
      width: 130px;
      margin-top: 9px;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        height: 130px;
        width: 130px;
        position: relative;
        top: 4px;
      }
    }

    .weather-info {
      margin-top: -120px;
      height: 110px;
      width: 130px;
      float: right;

      .temp {
        font-size: 40px;
        color: white;
        position: relative;
        top: 3px;
      }

      .weather_main_1 {
        font-size: 20px;
        color: white;
        font-weight: 400;
        text-transform: uppercase;
        margin-top: -4px;
      }

      .weather_descrip {
        padding: 4px;
        padding-left: 10px;
        padding-right: 10px;
        background: white;
        white-space: nowrap;
        font-size: 8px;
        border-radius: 15px;
        margin-top: 0.5px;
        max-width: 73px;
        text-align: center;
      }
    }
  }

  .other-weather-info {
    padding: 10px;
    margin-top: 15px;
    border-radius: 10px;
    height: 150px;
    background: #19202a;

    div {
      height: 60px;
      width: 90px;
      float: left;
      color: black;
      text-align: center;
      margin-left: 7px;
      margin-top: 4px;
      position: relative;
      top: 0.5px;

      span {
        font-weight: 300;
        padding: 3px;
        padding-left: 10px;
        padding-right: 10px;
        text-align: center;
        border-radius: 30px;
        font-size: 8px;
        background: white;
        color: black;
        font-weight: 600;
      }

      p {
        margin-top: 7px;
        font-size: 14px;
        font-weight: 500;
        color: white;
      }
    }
  }

  .other-weather-info .pressure p,
  .other-weather-info .wind-speed p {
    font-size: 13px;
  }
`

export const GlobalStyles = styled.div`
  ::selection {
    background: white;
    color: white;
  }
`

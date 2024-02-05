import styled from 'styled-components'

export const CurrencyConverterBody = styled.div`
  background: #1561d1;
  font-family: 'poppins', sans-serif;
`

export const CurrencyConverterContainer = styled.div`
  padding: 20px;
  width: 320px;
  background: white;
  border-radius: 7px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 1s;

  img {
    height: 70px;
    width: 70px;
    position: relative;
    left: 105px;
  }

  .app-title {
    text-align: center;
    font-size: 17px;
    text-transform: uppercase;
    font-weight: 600;
    margin-top: 4px;
  }

  .amount {
    margin-top: 25px;
    height: 80px;
    width: 100%;

    h3 {
      font-size: 14px;
      margin-top: 5px;
      font-weight: 400;
    }

    input {
      all: unset;
      height: 42px;
      width: 94%;
      border: 1px solid grey;
      padding-left: 10px;
      margin-top: 3px;
      border-radius: 3px;
    }
  }

  .from-to {
    height: 100px;
    width: 100%;
  }

  .from {
    height: 100px;
    width: 50%;
    padding: 7px;
    margin-left: -5px;
    h3 {
      font-size: 14px;
      font-weight: 400;
    }
    .from-input {
      height: 45px;
      width: 110px;
      padding: 5px;
      margin-top: 5px;
      display: flex;
      align-items: center;
      border: 1px solid grey;
      border-radius: 3px;
      cursor: pointer;

      .from-flag {
        height: 27px;
        width: 27px;
        margin-left: 5px;

        img {
          height: 27px;
          width: 27px;
          position: absolute;
          left: 35px;
          margin-top: -1px;
        }
      }

      input {
        all: unset;
        height: 30px;
        width: 40px;
        text-align: left;
        position: relative;
        left: 9px;
        font-size: 15px;
        border: 1px solid red;
      }

      i {
        font-size: 13px;
        margin-left: 8px;
      }
    }
  }

  .to {
    height: 100px;
    width: 50%;
    padding: 7px;
    position: absolute;
    right: 20px;
    margin-top: -100px;
    width: 44%;
    h3 {
      font-size: 14px;
      font-weight: 400;
      margin-left: 20px;
    }
    .to-input {
      height: 45px;
      width: 110px;
      padding: 5px;
      margin-top: 5px;
      display: flex;
      align-items: center;
      border: 1px solid grey;
      border-radius: 3px;
      cursor: pointer;
      margin-left: 20px;

      .to-flag {
        height: 27px;
        width: 27px;
        margin-left: 5px;

        img {
          height: 27px;
          width: 27px;
          position: absolute;
          left: 35px;
          margin-top: -1px;
          left: 38px;
        }
      }
      input {
        all: unset;
        height: 30px;
        width: 40px;
        text-align: left;
        position: relative;
        left: 9px;
        font-size: 15px;
        border: 1px solid red;
        left: 6px;
      }

      i {
        font-size: 13px;
        margin-left: 8px;
      }
    }
  }

  .switch-btn {
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-top: -45px;
    cursor: pointer;
  }

  .convert-btn {
    all: unset;
    height: 40px;
    width: 100%;
    background: #1561d1;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    border-radius: 3px;
    margin-top: -8px;
    cursor: pointer;
  }

  .result-box {
    height: 45px;
    width: 100%;
    background: rgba(21, 97, 209, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    margin-top: 8px;
    font-size: 14px;
    display: none;
    transition: all 0.2s;

    .result {
      font-size: 15px;
      font-weight: 400;
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      transition: all 0.2s;
      margin-top: 22px;
      white-space: nowrap;
    }
  }

  .from-country-options {
    height: 100px;
    width: 110px;
    background: white;
    border: 1px solid grey;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 3px;
    position: absolute;
    margin-top: 3px;
    transform: scale(0);
    transition: all 0.2s;
    transform-origin: top;
    overflow: hidden;
    overflow-y: scroll;
    padding: 5px;
    z-index: 1;

    li {
      height: 30px;
      width: 100%;
      border-bottom: 1px solid grey;
      padding: 6px;
      list-style-type: none;
      display: flex;
      align-items: center;
      font-size: 13px;
      padding-left: 50px;
      cursor: pointer;

      img {
        height: 20px;
        width: 20px;
        position: absolute;
        left: 20px;
      }
    }

    &::-webkit-scrollbar {
      display: none;
    }

    &.active {
      transform: scale(1);
      transition: all 0.2s;
      transform-origin: top;
    }
  }

  .to-country-options {
    height: 100px;
    width: 110px;
    background: white;
    border: 1px solid grey;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 3px;
    position: absolute;
    margin-top: 3px;
    transform: scale(0);
    transition: all 0.2s;
    transform-origin: top;
    overflow: hidden;
    overflow-y: scroll;
    padding: 5px;
    z-index: 1;
    margin-left: 20px;

    li {
      height: 30px;
      width: 100%;
      border-bottom: 1px solid grey;
      padding: 6px;
      list-style-type: none;
      display: flex;
      align-items: center;
      font-size: 13px;
      padding-left: 50px;
      cursor: pointer;

      img {
        height: 20px;
        width: 20px;
        position: absolute;
        left: 20px;
      }
    }

    &::-webkit-scrollbar {
      display: none;
    }

    &.active {
      transform: scale(1);
      transition: all 0.2s;
      transform-origin: top;
    }
  }

  &::selection {
    background: rgb(100, 149, 237, 0.8);
    color: white;
  }
`

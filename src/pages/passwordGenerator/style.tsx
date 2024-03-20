import styled from 'styled-components'

export const Body = styled.body`
  background: #7bdaf3;
  font-family: 'poppins', sans-serif;
`

export const Container = styled.div`
  padding: 40px;
  width: 380px;
  background: #e6f8f5;
  border-radius: 7px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .password-box {
    height: 45px;
    width: 100%;
    border-radius: 30px;
    background: #ffffff;
    border: 1px solid grey;
    padding: 25px;
    display: flex;
    align-items: center;
    h3 {
      font-size: 14px;
      color: grey;
      font-weight: 400;
    }

    .copy-btn {
      position: absolute;
      right: 63px;
      color: grey;
      font-size: 17px;
      cursor: pointer;
    }
  }

  .checkboxes-box {
    padding: 1px;
    margin-top: 15px;
    .lowercase {
      pointer-events: none;
    }
    div {
      height: 35px;
      width: 100%;
      padding-left: 35px;
      display: flex;
      align-items: center;
      span {
        padding-left: 20px;
      }
      input {
        -webkit-appearance: none;
        height: 18px;
        width: 18px;
        border: 1px solid grey;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        &::before {
          content: '\f00c';
          position: absolute;
          font-family: FontAwesome;
          color: white;
          font-size: 11px;
          display: none;
        }
        &:checked {
          background: #7bdaf3;
          border-color: #7bdaf3;
          &::before {
            display: block;
          }
        }
      }
    }
  }
  .password-length {
    padding: 2px;
    padding-left: 35px;
    h3 {
      font-size: 15px;
      color: grey;
      font-weight: 500;
      margin-top: 12px;
    }
    input {
      -webkit-appearance: none;
      height: 3px;
      width: 70%;
      background: lightgrey;
      position: relative;
      top: -3px;
      cursor: pointer;
      border-radius: 3px;
      &::-webkit-slider-thumb {
        -webkit-appearance: none;
        height: 13px;
        width: 13px;
        border-radius: 100%;
        background: #7bdaf3;
        cursor: pointer;
      }
    }
    .length-value {
      height: 30px;
      width: 55px;
      background: white;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 3px;
      border: 1px solid grey;
      position: absolute;
      right: 55px;
      margin-top: -25px;
    }
  }
  .generate-btn {
    all: unset;
    height: 50px;
    width: 260px;
    background: #16a085;
    color: white;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    margin-top: 30px;
    cursor: pointer;
  }

  .copy-btn span {
    position: absolute;
    font-size: 9px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: none;
    margin-left: -8px;
  }
`

export const GlobalStyles = styled.div`
  ::selection {
    background: rgb(100, 149, 237, 0.8);
    color: white;
  }
`

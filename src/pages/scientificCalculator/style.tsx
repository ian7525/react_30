import styled from 'styled-components'

export const Body = styled.body`
  background: #f0eff5;
  font-family: 'Quicksand', sans-serif;
`

export const Container = styled.div`
  padding: 20px;
  width: 360px;
  background: #1b1e27;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 13px;
  overflow: hidden;

  .input-box {
    height: 160px;
    width: 100%;

    input {
      all: unset;
      height: 58px;
      width: 317px;
      position: relative;
      top: 70px;
      text-align: right;
      font-size: 20px;
      color: white;
    }

    input-value {
      height: 30px;
      font-size: 25px;
    }

    .result {
      font-weight: 600;
      font-size: 39px;
    }
  }

  .btns-box {
    height: 360px;

    button {
      all: unset;
      height: 60px;
      width: 64px;
      background: #262930;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 7px;
      float: left;
      margin-left: 12px;
      margin-top: 10px;
      cursor: pointer;
      position: relative;
      left: 14px;
      font-size: 17px;
      font-weight: 600;
    }

    .btn.no-btn {
      pointer-events: none;
    }

    .with-bg-btn {
      background: #1bb668;
    }
  }

  .scientific-btns {
    height: 340px;
    width: 250px;
    border-radius: 7px;
    padding: 15px;
    margin-left: 8px;
    position: absolute;
    bottom: 30px;
    left: -225px;
    transition: all 0.2s;
    background: #1bb668;

    &.active {
      left: 5px;
    }

    .scien-btn {
      all: unset;
      height: 35px;
      width: 45px;
      float: left;
      margin-left: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      margin-top: 30px;
      font-size: 21px;
      margin-left: 15px;
      position: relative;
      top: -13px;
      cursor: pointer;
    }

    .back-btn {
      height: 60px;
      width: 85px;
      border-top-right-radius: 30px;
      border-bottom-right-radius: 30px;
      background: #fcba04;
      position: absolute;
      right: -75px;
      bottom: 0px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      color: white;
      background: #1bb668;
    }
  }
`

export const GlobalStyles = styled.div`
  ::selection {
    background: rgb(100, 149, 237, 0.8);
    color: white;
  }
`

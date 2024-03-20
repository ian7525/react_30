import styled from 'styled-components'

export const Body = styled.body`
  font-family: 'poppins', sans-serif;
  background: #6495ed;
`

export const Container = styled.div`
  padding: 20px;
  background: white;
  border-radius: 7px;
  width: 360px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .app-title {
    text-align: center;
    font-size: 18px;
    white-space: nowrap;
  }

  .principal-amount {
    margin-top: 40px;

    span {
      font-size: 15px;
      font-weight: 600;
    }

    input {
      display: block;
      all: unset;
      height: 15px;
      border-bottom: 1px solid black;
      margin-top: 6px;
      padding: 5px;
      padding-left: 10px;
    }
  }

  .box {
    height: 60px;
    width: 158px;
    float: left;
    margin-top: 17px;
    span {
      font-size: 14px;
      font-weight: 600;
    }
    input {
      all: unset;
      height: 15px;
      width: 135px;
      border-bottom: 1px solid black;
      padding: 5px;
      padding-left: 10px;
      margin-top: 3px;
    }
  }

  .time-period {
    position: relative;
    left: 13px;
  }

  .calculate-btn {
    all: unset;
    height: 40px;
    width: 180px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 7px;
    background: #6495ed;
    margin: auto;
    position: relative;
    top: 13px;
    cursor: pointer;
  }

  .result-box {
    padding: 15px;
    background: rgba(100, 149, 237, 0.1);
    text-align: center;
    margin-top: 41px;

    p {
      margin-top: 7px;
      font-size: 14px;
    }
  }
`

export const GlobalStyles = styled.div`
  ::selection {
    background: rgb(100, 149, 237, 0.8);
    color: white;
  }
`

import styled from 'styled-components'

export const AgeBody = styled.div`
  background: #e9e9ea;
  font-family: 'poppins', sans-serif;
`

export const AgeContainer = styled.div`
  padding: 1px;
  width: 330px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 7px;
  background: white;
  overflow: hidden;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  .data-input {
    padding: 20px;
    width: 101%;
    background: #ff7433;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    margin-top: -1px;
    margin-left: -1px;
  }

  .date-input div {
    height: 70px;
    width: 33%;
    float: left;
  }

  .date-input div p {
    font-size: 13px;
    text-align: center;
    color: white;
  }

  .date-input div input {
    all: unset;
    height: 30px;
    width: 75px;
    background: white;
    text-align: center;
    border-radius: 3px;
    margin-top: 8px;
    margin-left: 10px;
  }

  .submit-btn {
    all: unset;
    height: 35px;
    width: 100%;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    border-radius: 3px;
    cursor: pointer;
  }

  .result {
    width: 94%;
    height: 120px;
    margin-left: 10px;
    margin-top: 13px;
    border-bottom: 1px solid grey;
  }

  .result > div {
    height: 110px;
    width: 33%;
    float: left;
    text-align: center;
    font-size: 25px;
    font-weight: 600;
    color: white;
  }

  .result > div > p {
    color: grey;
    font-size: 12px;
    font-weight: 400;
    margin-top: 5px;
  }

  .result > div > div {
    height: 70px;
    width: 70px;
    background: #ff7433;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 7px;
    margin-left: 15px;
    margin-top: 8px;
  }

  .other-results {
    margin-top: 13px;
    padding-bottom: 17px;
  }

  .other-results table td {
    padding: 4px;
  }

  .other-results table td:nth-child(odd) {
    font-size: 13px;
    position: relative;
    left: 10px;
  }

  .other-results table td:nth-child(even) {
    font-weight: 600;
    font-size: 13px;
    position: absolute;
    right: 20px;
  }
`

// ::selection {
// background:rgb(100, 149, 237, 0.8);
// color:white;
// }

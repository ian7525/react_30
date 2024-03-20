import styled from 'styled-components'

export const Body = styled.body`
  background: #04b19d;
  font-family: 'poppins', sans-serif;
`

export const Container = styled.div`
  padding: 25px;
  width: 350px;
  background: #2f2f2f;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 7px;

  .emoji {
    text-align: center;
    font-size: 70px;
    margin-top: 5px;
    text-shadow: 0px 0px 25px rgba(0, 0, 0, 1);
  }

  .joke {
    color: white;
    text-align: center;
    margin-top: 10px;
    font-size: 18px;
  }

  .btns {
    height: 95px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5px;
    div {
      height: 55px;
      width: 55px;
      background: #000000;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 100%;
      float: left;
      margin-left: 20px;
      cursor: pointer;
      margin-top: 10px;
      font-size: 18px;
      position: relative;
      left: -15px;
    }
    .copy span {
      position: absolute;
      color: white;
      font-style: italic;
      font-size: 8px;
      display: none;
    }
  }
`

export const GlobalStyles = styled.div`
  ::selection {
    background: black;
    color: white;
  }
`

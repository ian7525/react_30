import styled from 'styled-components'

export const Body = styled.body`
  background: #4285f4;
  font-family: 'poppins', sans-serif;
`

export const Container = styled.div`
  padding: 20px 20px 30px 20px;
  background: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 7px;
  width: 350px;
  h1 {
    text-align: center;
    font-size: 22px;
  }
  .fa-quote-left {
    font-size: 30px;
    margin-top: 25px;
  }
  .quote {
    margin-top: 5px;
    font-size: 16px;
  }
  .author {
    float: right;
    margin-top: 40px;
    font-weight: 300;
    font-style: italic;
    position: relative;
    left: 20px;
  }
  .fa-quote-right {
    font-size: 30px;
    float: right;
    margin-top: 5px;
  }
  .new-quote-btn {
    all: unset;
    height: 45px;
    width: 310px;
    color: white;
    background: #4285f4;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    cursor: pointer;
    position: relative;
    top: 10px;
  }

  .speak,
  .copy,
  .twitter {
    all: unset;
    height: 50px;
    width: 50px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    float: left;
    margin-left: 35px;
    margin-top: 30px;
    transition: all 0.3s;
  }

  .speak:hover,
  .copy:hover,
  .twitter:hover {
    background: #4285f4;
    color: white;
    border-color: #4285f4;
  }
`

export const GlobalStyles = styled.div`
  .new-quote-btn.click-animation {
    transform: scale(1.05);
    transition: all 0.2s;
  }
  .copy span {
    position: absolute;
    font-size: 9px;
    font-style: italic;
    display: none;
  }

  ::selection {
    background: rgb(100, 149, 237, 0.8);
    color: white;
  }
`

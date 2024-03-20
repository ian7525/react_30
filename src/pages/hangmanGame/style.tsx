import styled from 'styled-components'

export const Body = styled.body`
  background: orange;
  font-family: 'poppins', sans-serif;
`

export const Container = styled.div`
  padding: 15px 10px 20px 10px;
  width: 325px;
  background: white;
  border-radius: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const HangmanBody = styled.div`
  height: 140px;
  width: 230px;
  border: 1px solid grey;
  padding-bottom: 10px;
  margin-left: 35px;
  margin-top: 20px;

  $ > span:nth-child(1),
  .hangman-body > span:nth-child(2),
  .hangman-body > span:nth-child(3),
  .hangman-body > span:nth-child(4),
  .hangman-body > span:nth-child(6),
  .hangman-body > span:nth-child(7),
  .hangman-body > span:nth-child(8) {
    height: 2px;
    width: 30px;
    background: black;
    position: absolute;
    margin-top: 130px;
    margin-left: 25px;
  }

  span:nth-child(1) {
    margin-left: 12px;
  }

  & > span:nth-child(2) {
    width: 2px;
    height: 115px;
    margin-top: 15px;
  }

  & > span:nth-child(3) {
    width: 60px;
    margin-top: 15px;
  }

  span:nth-child(3)::before {
    content: '';
    height: 30px;
    width: 2px;
    background: black;
    position: absolute;
    margin-left: 10px;
    margin-top: -4px;
    transform: rotate(45deg);
    border-radius: 30px;
  }

  & > span:nth-child(4) {
    margin-top: 15px;
    width: 2px;
    height: 15px;
    margin-left: 83px;
  }

  & > span:nth-child(5) {
    height: 30px;
    width: 30px;
    background: white;
    border: 1px solid black;
    border-radius: 100%;
    position: absolute;
    margin-left: 70px;
    margin-top: 30px;
  }

  & > span:nth-child(6) {
    margin-top: 60px;
    margin-left: 83px;
    height: 30px;
    width: 1px;
  }

  & > span:nth-child(7),
  .hangman-body > span:nth-child(8) {
    height: 20px;
    width: 1px;
    margin-left: 77px;
    margin-top: 62px;
    transform: rotate(40deg);
  }

  & > span:nth-child(8) {
    transform: rotate(-40deg);
    margin-left: 89px;
  }
`

export const GuessWord = styled.div`
  height: 60px;
  width: 100%;
  margin-top: 15px;
  text-align: center;
  p {
    font-size: 12px;
  }

  & > span:nth-child(2) {
    font-size: 15px;
    position: relative;
    top: 7px;
    white-space: nowrap;
    font-weight: 600;
  }
`

export const KeyboardBox = styled.div`
  margin-top: 10px;
  height: 150px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5em;
  .keyboard-btns {
    all: unset;
    background: #fff;
    padding: 5px;
    border-radius: 3px;
    height: 20px;
    width: 18px;
    text-align: center;
    margin-left: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    cursor: pointer;
    font-size: 15px;
  }
`

export const ResultBox = styled.div`
  height: 449px;
  width: 325px;
  background: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  display: none;

  & > span {
    position: absolute;
    top: 46%;
    left: 50%;
    transform: translate(-50%, -50%);
    white-space: nowrap;
    font-size: 17px;
  }

  & > button {
    all: unset;
    padding: 10px;
    width: 100px;
    background: orange;
    color: black;
    border-radius: 5px;
    position: absolute;
    top: 61%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    border: 2px solid black;
  }
`

export const GlobalStyles = styled.div`
  #leg-one,
  #leg-two {
    height: 15px;
    width: 1px;
    margin-left: 78px;
    margin-top: 88px;
    transform: rotate(40deg);
    background: black;
    position: absolute;
  }

  #leg-two {
    transform: rotate(-40deg);
    margin-left: 88px;
  }

  .face,
  .stomach,
  .hand-one,
  .hand-two,
  #leg-one,
  #leg-two {
    display: none;
  }

  .message {
    position: absolute;
    top: 37%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 24px;
  }

  .result-answer {
    font-weight: 600;
  }

  .reset-btn {
    all: unset;
    background: orange;
    color: black;
    border: 2px solid black;
    text-align: center;
    padding: 1px;
    width: 50px;
    font-size: 12px;
    float: right;
    cursor: pointer;
    border-radius: 3px;
    margin-right: 3px;
  }

  .wrong-guesses {
    font-size: 12px;
    margin-left: 10px;
  }
`

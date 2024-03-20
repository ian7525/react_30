import styled from 'styled-components'

export const Body = styled.body`
  background: #9e38db;
  font-family: 'poppins', sans-serif;
`

export const MainWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .start-quiz-btn {
    all: unset;
    height: 50px;
    width: 150px;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #9e38db;
    border-radius: 5px;
    cursor: pointer;
  }

  .container .quiz-top-bar {
    height: 60px;
    width: 100%;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    padding: 20px;
    display: flex;
    align-items: center;
    padding-left: 25px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  .container .quiz-top-bar .timer {
    height: 37px;
    width: 75px;
    background: gainsboro;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    border-radius: 3px;
    position: absolute;
    right: 25px;
    border: 1px solid gainsboro;
  }

  .container .quiz-top-bar .timer span {
    padding-left: 7px;
  }

  .container .quiz-top-bar .timer-progress-bar {
    height: 4px;
    width: 0px;
    background: #9e38db;
    position: absolute;
    left: 0;
    margin-top: 56px;
  }

  .container .ques-box,
  .main-wrapper .container .option-box {
    padding: 25px;
    padding-bottom: 10px;
  }

  .container .ques-box {
    margin-top: 3px;
  }

  .container .ques-box h3 {
    font-size: 16px;
  }

  .container .option-box {
    padding-top: 3px;
  }

  .container .option-box .option {
    width: 100%;
    border: 1px solid grey;
    border-radius: 5px;
    padding: 15px;
    display: flex;
    align-items: center;
    margin-top: 15px;
    cursor: pointer;
  }

  .container .option-box .option .option-num-lett {
    height: 30px;
    width: 30px;
    color: white;
    background: #9e38db;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    position: absolute;
    font-size: 12px;
  }

  .container .option-box .option span {
    margin-left: 46px;
    font-size: 14px;
  }

  .container .next-ques-btn {
    all: unset;
    height: 45px;
    width: 86.5%;
    background: black;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    margin-left: 25px;
    cursor: pointer;
    margin-top: 4px;
    font-size: 14px;
    pointer-events: none;
  }

  .container .next-ques-btn i {
    padding-left: 10px;
  }
  .userScoreBox {
    padding: 20px;
  }
`

export const Container = styled.div`
  width: 360px;
  background: white;
  border-radius: 7px;
  padding-bottom: 25px;
  display: none;
`

export const ResultDiv = styled.div`
  height: 300px;
  width: 360px;
  background: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  display: none;
  .fa-crown {
    color: #9e38db;
    font-size: 120px;
    position: absolute;
    top: 80px;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  span {
    position: absolute;
    top: 170px;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 20px;
    white-space: nowrap;
  }
  .score {
    position: absolute;
    top: 205px;
    height: 30px;
    width: 100%;
    color: black;
  }
`

export const GlobalStyles = styled.div`
  .option > .icon {
    height: 30px;
    width: 30px;
    color: white;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 40px;
  }

  .correct-icon {
    background: #6fbd67;
  }

  .wrong-icon {
    background: #d73739;
  }

  .option.correct {
    background-color: #e7f6d5;
    color: #689f38;
    border: #689f38;
    cursor: pointer;
  }

  .option.incorrect {
    background-color: #ffdde0;
    color: #d32f2f;
    border-color: #d32f2f;
    cursor: pointer;
  }

  .option.disabled {
    pointer-events: none;
  }

  .score > span {
    position: absolute;
    top: 3px;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 17px;
  }

  .replay-quiz-btn {
    all: unset;
    position: absolute;
    bottom: 5px;
    padding: 5px;
    width: 100px;
    background: #9e38db;
    white-space: nowrap;
    color: white;
    border-radius: 3px;
    text-align: center;
    cursor: pointer;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 2px solid #9e38db;
  }

  ::selection {
    background: rgb(100, 149, 237, 0.8);
    color: white;
  }
`

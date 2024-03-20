import styled from 'styled-components'

export const Body = styled.body`
  background: #7289da;
  font-family: 'poppins', sans-serif;
`

export const Container = styled.div`
  padding: 25px;
  width: 360px;
  background: white;
  border-radius: 7px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 1s;
  h4 {
    font-size: 13.5px;
    font-weight: 400;
    text-align: center;
    margin-top: 8px;
  }
  .user-input-box {
    height: 55px;
    width: 100%;
    margin-top: 20px;
    display: flex;
    align-items: center;
    input {
      all: unset;
      height: 40px;
      width: 135px;
      padding: 5px;
      border: 1px solid grey;
      border-radius: 7px;
      padding-left: 15px;
      font-size: 16px;
    }
    button {
      all: unset;
      height: 50px;
      margin-left: 10px;
      width: 140px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      background: #7289da;
      border-radius: 5px;
    }
  }

  p {
    text-align: center;
    font-size: 13px;
    margin-top: 9px;
  }

  .guess-low-high {
    margin-top: 22px;
    display: none;
  }

  .no-of-chances {
    margin-top: 25px;
  }
`

export const ResultBox = styled.div`
  padding: 20px;
  width: 360px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 7px;
  background: white;
  display: none;
  h3 {
    text-align: center;
    font-size: 20px;
    margin-top: 3px;
  }
  .play-again-btn {
    all: unset;
    height: 35px;
    width: 130px;
    background: #7289da;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    border-radius: 5px;
    margin: auto;
    margin-top: 12px;
    font-size: 12px;
    cursor: pointer;
  }
`

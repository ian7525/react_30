import styled from 'styled-components'

export const Body = styled.body`
  font-family: 'poppins', sans-serif;
  background: #87cefa;
`

export const Container = styled.div`
  background: #131723;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  width: 350px;
  height: 280px;
  border-radius: 7px;
  transition: all 0.2s;

  .app-title {
    text-align: center;
    color: white;
    font-size: 13px;
  }

  .timer {
    height: 70px;
    width: 300px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;

    span {
      font-size: 54px;
      word-spacing: 3px;
    }

    .ms {
      font-size: 13px;
      position: relative;
      top: -8px;
      color: #87cefa;
    }
  }

  button {
    all: unset;
    height: 40px;
    width: 100px;
    position: absolute;
    top: 195px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
    margin-left: 15px;
    color: #87cefa;
    border: 1px solid #87cefa;
    cursor: pointer;
    text-align: center;
  }

  .other-side {
    position: absolute;
    right: 35px;
  }

  .stop,
  .lap {
    display: none;
  }

  .lap-container {
    height: 150px;
    width: 100%;
    position: relative;
    top: 105px;
    padding: 8px;
    overflow: hidden;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      display: none;
    }

    li {
      list-style-type: none;
      height: 47px;
      width: 100%;
      border-bottom: 1px solid #87cefa;
      display: flex;
      align-items: center;

      .lap-num {
        color: #87cefa;
      }

      .lap-timer {
        position: absolute;
        right: 10px;
        color: white;
      }
    }
  }
`

export const GlobalStyles = styled.div`
  ::selection {
    background: #87cefa;
    color: white;
  }
`

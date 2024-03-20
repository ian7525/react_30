import styled from 'styled-components'

export const Body = styled.body`
  background: #9370db;
  font-family: 'poppins', sans-serif;
`

export const Container = styled.div`
  height: 280px;
  width: 330px;
  background: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 7px;

  .btns {
    height: 100px;
    width: 100%;
    position: absolute;
    bottom: 0;

    div {
      height: 80px;
      width: 80px;
      float: left;
      text-align: center;
      cursor: pointer;
      margin-left: 10px;
      position: relative;
      left: 25px;

      i {
        font-size: 33px;
        color: #9370db;
        margin-top: 5px;
      }

      p {
        font-size: 11px;
        position: relative;
        top: 4px;
        color: #9370db;
      }
    }
  }

  .choices {
    height: 130px;
    width: 100%;
    padding: 30px;
    display: flex;
    align-items: center;

    div {
      font-size: 75px;
      color: #663399;

      &:nth-child(1) {
        transform: rotate(90deg);
        transition: all 0.2s;
      }

      &:nth-child(2) {
        transform: rotate(270deg) scaleX(-1);
        position: absolute;
        right: 30px;
        transition: all 0.2s;
      }
    }

    .user-choice .fa-hand-scissors {
      transform: rotate(-270deg) scaleY(-1);
    }

    .computer-choice .fa-hand-scissors {
      transform: rotate(-80deg) scaleX(-1);
    }

    h4 {
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 20px;
      margin-top: 150px;
    }

    .user-choice.user-icon-animate {
      animation: userIcon 2s linear infinite;
    }

    .computer-choice.computer-icon-animate {
      animation: computerIcon 2s linear infinite;
    }
  }
`

export const GlobalStyles = styled.div`
  @keyframes userIcon {
    0% {
      transform: rotate(50deg);
    }
    50% {
      transform: rotate(125deg);
    }
    100% {
      transform: rotate(50deg);
    }
  }

  @keyframes computerIcon {
    0% {
      transform: rotate(-50deg) scaleX(-1);
    }
    50% {
      transform: rotate(-125deg) scaleX(-1);
    }
    100% {
      transform: rotate(-50deg) scaleX(-1);
    }
  }

  ::selection {
    background: white;
    color: white;
  }
`

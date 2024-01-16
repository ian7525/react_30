import styled from 'styled-components'

export const BmiBody = styled.body`
  background: #05c069;
  font-family: 'poppins', sans-serif;
`

interface StyledDivProps {
  display: string
}
export const BmiContainer = styled.div<StyledDivProps>`
  padding: 25px;
  width: 350px;
  background: white;
  border-radius: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.2s;

  .app-title {
    text-align: center;
    font-size: 22px;
    color: #05c069;
  }

  .box {
    height: 120px;
    width: 300px;
    background: white;
    border-radius: 20px;
    margin: auto;
    margin-top: 20px;
    padding: 20px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    h4 {
      text-align: center;
    }

    input {
      all: unset;
      height: 40px;
      width: 200px;
      border-bottom: 1px solid grey;
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      margin-top: 25px;
      text-align: center;
    }
  }

  .calculate-btn {
    all: unset;
    height: 45px;
    width: 100%;
    color: white;
    background: #05c069;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    margin-top: 15px;
    cursor: pointer;
  }

  .result-box {
    display: ${(props) => (props.display ? props.display : 'none')};

    .yr-bmi-txt {
      text-align: center;
      margin-top: 17px;
      font-weight: 500;
    }

    .bmi {
      padding-left: 10px;
      padding-right: 10px;
      height: 50px;
      background: white;
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #05c069;
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
      margin: auto;
      width: 120px;
      margin-top: 5px;
      font-size: 23px;
    }

    .result {
      text-align: center;
      font-size: 15px;
      margin-top: 15px;
      color: ${(props) => (props.color ? props.color : 'none')};

      span {
        color: #05c069;
      }
    }
  }

  &::selection {
    background: rgb(100, 149, 237, 0.8);
    color: white;
  }
`

interface StyledDivProps {
  display: string
}
export const BmiResult = styled.p<StyledDivProps>``

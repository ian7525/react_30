import styled from 'styled-components'

export const BoxShodowBody = styled.body`
  background: #131418;
  font-family: 'poppins', sans-serif;
`

interface StyledDivProps {
  boxShadow: string
  backgroundColor: string
}
export const BoxShadowContainer = styled.div<StyledDivProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 7px;
  padding: 10px;
  width: 340px;
  height: 480px;

  & > input[type='color']::-webkit-color-swatch-wrapper {
    padding: 0;
  }

  & > input[type='color']::-webkit-color-swatch {
    border: none;
    border-radius: 100%;
  }

  input[type='color'] {
    -webkit-appearance: none;
    height: 35px;
    width: 35px;
    border-radius: 100%;
    outline: none;
    border: none;
    cursor: pointer;
    margin-top: 15px;
    margin-left: 15px;

    &:nth-child(2) {
      float: right;
      margin-right: 15px;
    }
  }

  .output-box {
    height: 110px;
    width: 160px;
    border-radius: 7px;
    background: #0d1fe6;
    box-shadow: ${(props) =>
      props.boxShadow ? props.boxShadow : '0px 0px 19px 0px #000000'};
    margin: auto;
    margin-top: 15px;
    background-color: ${(props) =>
      props.backgroundColor ? props.backgroundColor : '#0D1FE6'};
  }

  .setting-box {
    padding: 1px;
    margin-top: 30px;

    div {
      height: 70px;
      width: 50%;
      float: left;
      margin-top: 10px;

      p {
        text-align: center;
        position: relative;
        top: 5px;
        font-size: 14px;
      }

      input {
        margin-left: 15px;
        margin-top: 15px;
        cursor: pointer;
      }
    }
  }

  .checkbox {
    height: 40px;
    width: 130px;
    position: absolute;
    bottom: 43px;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;

    input {
      cursor: pointer;
    }

    span {
      padding-left: 7px;
      font-size: 14px;
    }
  }

  .code-box {
    height: 40px;
    width: 100%;
    background: lightgrey;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    position: relative;
    top: 45px;
    border-radius: 3px;
  }

  &::selection {
    background: rgb(100, 149, 237, 0.8);
    color: white;
  }
`

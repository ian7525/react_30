import styled from 'styled-components'

export const BarcodeBody = styled.body`
  background: #00bfff;
  font-family: 'poppins', sans-serif;
`

export const BarcodeContainer = styled.div`
  padding: 30px;
  background: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  width: 355px;
  padding-bottom: 5px;

  &.active {
    padding-bottom: 35px;

    .barcode-box {
      height: 200px;
      border: 1px solid grey;
      transition: all 0.2s;

      #barcode {
        position: absolute;
        left: 12%;
        height: 165px;
        width: 270px;
        margin-top: 15px;
      }
    }
  }

  .app-title {
    font-size: 16px;
    color: #222;

    i {
      padding-right: 3px;
    }
  }

  .userInput {
    all: unset;
    height: 40px;
    width: 100%;
    border-bottom: 2px solid black;
    font-size: 16px;
    margin-top: 20px;
  }

  button {
    all: unset;
    height: 45px;
    width: 100%;
    background: #00bfff;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: capitalize;
    border-radius: 3px;
    margin-top: 8px;
    cursor: pointer;
  }

  .barcode-box {
    height: 0px;
    width: 100%;
    margin-top: 25px;
    border-radius: 3px;
    transition: all 0.2s;
  }

  &::selection {
    background: rgb(100, 149, 237, 0.8);
    color: white;
  }
`

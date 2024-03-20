import styled from 'styled-components'

export const Body = styled.body`
  background: #494e54;
  font-family: 'poppins', sans-serif;
`

export const Container = styled.div`
  padding: 10px;
  background: #292c31;
  height: 600px;
  width: 330px;
  border-radius: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px,
    rgba(17, 17, 26, 0.05) 0px 8px 32px;

  .input-box {
    height: 200px;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    padding: 20px;
    overflow-x: scroll;

    .result {
      color: white;
      font-size: 43px;
      position: absolute;
      bottom: 0;
      right: 25px;
    }

    input {
      all: unset;
      color: dimgrey;
      position: absolute;
      right: 25px;
      bottom: 60px;
      text-align: right;
      font-size: 24px;
    }
  }

  &.light .input-box .result {
    color: black;
  }

  .btns-box {
    position: absolute;
    left: 0;
    top: 200px;
    width: 100%;
    padding: 10px;
    padding-left: 14px;

    .with-bg-btn {
      background: #30ad6b;
    }
  }

  .btns-box .btn,
  .btns-box .btns,
  .btns-box #ac,
  .btns-box #del-btn {
    all: unset;
    all: unset;
    width: 60px;
    height: 60px;
    float: left;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 12.5px;
    margin-top: 10px;
    border-radius: 7px;
    cursor: pointer;
    font-weight: 600;
    font-size: 21px;
  }

  .btns-box .btn,
  .btns-box .btns,
  .btns-box #ac,
  .btns-box #del-btn {
    background-color: #323337;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  }
`

export const GlobalStyles = styled.div`
  ::selection {
    background: rgb(100, 149, 237, 0.8);
    color: white;
  }
`

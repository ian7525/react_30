import styled from 'styled-components'

export const Body = styled.body`
  background: #5a4ca1;
  font-family: 'poppins', sans-serif;
`

export const Container = styled.div`
  padding: 20px 20px 30px 20px;
  width: 360px;
  background: white;
  border-radius: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.2s;
  height: 460px;
  height: 235px;

  .app-name {
    height: 60px;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    padding-left: 25px;
    font-size: 11px;
    border-bottom: 1px solid grey;
  }

  .url-box {
    margin-top: 60px;
    p {
      font-size: 12px;
      color: grey;
    }
    input {
      all: unset;
      height: 20px;
      width: 92%;
      padding: 10px;
      background: #f5f5f5;
      font-size: 14px;
      padding-left: 15px;
      margin-top: 8px;
      border-radius: 3px;
    }
  }

  .generate-btn {
    all: unset;
    height: 50px;
    width: 100%;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #5a4ca1;
    border-radius: 3px;
    margin-top: 12px;
    cursor: pointer;
    font-size: 14px;
  }

  .qr-box {
    height: 200px;
    width: 100%;
    border: 1px solid grey;
    border-radius: 3px;
    margin-top: 25px;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
    visibility: hidden;
    overflow: hidden;
  }
`

export const GlobalStyles = styled.div`
  ::selection {
    background: rgb(100, 149, 237, 0.8);
    color: white;
  }
`

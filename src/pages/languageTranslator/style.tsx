import styled from 'styled-components'

export const Body = styled.body`
  background: #4169e1;
  font-family: 'poppins', sans-serif;
`

export const Container = styled.div`
  padding: 20px;
  width: 360px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 7px;
  background: #f6f6f6;
  height: 480px;

  .select-box {
    height: 50px;
    width: 100%;
  }

  .select-box .to-input-box,
  .container .select-box .from-input-box {
    height: 50px;
    width: 33%;
    position: absolute;
    right: 20px;
    display: flex;
    align-items: center;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;
    cursor: pointer;
    background: white;
  }

  .select-box .from-input-box {
    left: 20px;
  }

  .select-box .to-input-box input,
  .container .select-box .from-input-box input {
    all: unset;
    height: 30px;
    width: 68px;
    color: black;
    text-align: center;
    margin-left: 13px;
    font-size: 15px;
  }

  .select-box .to-input-box i,
  .container .select-box .from-input-box i {
    padding-left: 2px;
    font-size: 22px;
  }

  .select-box .switch-btn {
    height: 40px;
    width: 40px;
    background: #4169e1;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-top: 27px;
    color: white;
    cursor: pointer;
  }

  .select-box .switch-btn i {
    font-size: 18px;
  }

  .from-options,
  .container .to-options {
    height: 135px;
    width: 120px;
    background: white;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    border-radius: 7px;
    margin-top: 5px;
    overflow: hidden;
    padding: 15px;
    overflow-y: scroll;
    transform: scale(0);
    transform-origin: top;
    transition: all 0.2s;
    opacity: 0;
    position: absolute;
    z-index: 1;
  }

  .from-options.from-options-active,
  .container .to-options.to-options-active {
    transform: scale(1);
    transition: all 0.2s;
    opacity: 1;
  }

  .from-options::-webkit-scrollbar,
  .container .to-options::-webkit-scrollbar {
    display: none;
  }

  .from-options li,
  .container .to-options li {
    list-style-type: none;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    top: -7px;
    font-size: 15px;
  }

  .to-options {
    position: absolute;
    top: 70px;
    right: 20px;
  }

  .box {
    height: 180px;
    width: 100%;
    background: white;
    border-radius: 7px;
    margin-top: 10px;
    padding: 15px;
    position: relative;
    top: 7px;

    textarea {
      all: unset;
      height: 110px;
      width: 100%;

      &::-webkit-scrollbar {
        display: none;
      }
    }

    .btns {
      height: 40px;
      width: 100%;
      border-top: 1px solid grey;
      display: flex;
      align-items: center;
      i {
        font-size: 20px;
        color: grey;
        position: absolute;
        right: 25px;
        cursor: pointer;
      }
      .copy-btn {
        right: 52px;
      }
    }
  }

  .to-text-box textarea::placeholder {
    color: black;
  }
`

export const GlobalStyles = styled.div`
  ::selection {
    background: rgb(100, 149, 237, 0.8);
    color: white;
  }
`

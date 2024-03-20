import styled from 'styled-components'

export const Body = styled.body`
  background: #f65e12;
  font-family: 'poppins', sans-serif;
`

export const Container = styled.div`
  padding: 20px;
  width: 355px;
  background: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  overflow: hidden;

  .search-box {
    height: 50px;
    border: 1px solid grey;
    border-radius: 5px;
    padding: 5px;
    display: flex;
    align-items: center;

    i {
      color: grey;
      margin-left: 10px;
      font-size: 15px;
    }
    input {
      all: unset;
      height: 45px;
      width: 260px;
      font-size: 14px;
      padding-left: 10px;
    }
  }
  .display-msg {
    color: grey;
    font-size: 13px;
    text-align: center;
    margin-top: 10px;
  }
  .food-img {
    height: 130px;
    width: 160px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    margin-top: 20px;
    overflow: hidden;
    img {
      height: 130px;
      width: 160px;
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;
    }
  }
  .food-name {
    height: 50px;
    padding: 10px;
    background: #f65e12;
    color: white;
    font-size: 12px;
    width: 250px;
    margin: auto;
    border-radius: 3px;
    white-space: nowrap;
    text-align: center;
    z-index: 1;
    h3 {
      margin-top: -5px;
    }
  }

  .ingredients-box {
    ul {
      display: grid;
      grid-template-columns: auto auto;
      gap: 0.7em 3em;
      padding: 1.2em 0 0 1.2em;
      font-size: 1em;
      margin-left: 9px;
      margin-top: 5px;
    }
    li {
      font-size: 12px;
    }
  }

  .view-recipe-btn {
    all: unset;
    height: 35px;
    width: 100px;
    background: white;
    border-radius: 30px;
    border: 1px solid #f65e12;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    float: right;
    color: #f65e12;
    margin-right: 7px;
    margin-top: -10px;
    cursor: pointer;
  }

  .instructions-box {
    height: 100%;
    width: 100%;
    background: white;
    position: absolute;
    top: 0;
    left: -100%;
    padding: 25px;
    font-size: 14px;
    overflow: hidden;
    overflow-y: scroll;
    transition: all 0.2s;

    &::-webkit-scrollbar {
      display: none;
    }

    .close-btn {
      all: unset;
      height: 70px;
      width: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      position: fixed;
      background: #f65e12;
      z-index: 1;
      cursor: pointer;
      top: 50%;
      transform: translate(-50%, -50%);
      margin-left: 315.5px;
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
    }
  }

  .instructions {
    position: relative;
    top: 5px;
    font-size: 1em;
    white-space: pre-wrap;
    word-wrap: break-word;
    font-family: 'poppins', sans-serif;
  }

  .info-box {
    display: none;
  }
`

export const GlobalStyles = styled.div`
  ::selection {
    background: rgb(100, 149, 237, 0.8);
    color: white;
  }
`

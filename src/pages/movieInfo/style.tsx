import styled from 'styled-components'

export const Body = styled.body`
  background: #f0f0f0;
  font-family: 'poppins', sans-serif;
`

export const Container = styled.div`
  padding: 20px;
  width: 380px;
  background: #252528;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 7px;
  padding-bottom: 30px;
  padding-top: 30px;
  .search-box {
    height: 45px;
    width: 100%;
    border-radius: 3px;
    display: flex;
    align-items: center;
    padding: 5px;
    input {
      all: unset;
      height: 45px;
      width: 215px;
      font-size: 15px;
      padding-left: 18px;
      border-radius: 5px;
      background: #121214;
      color: white;
    }

    button {
      all: unset;
      height: 43px;
      width: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #f00000;
      border-radius: 3px;
      font-size: 14px;
      margin-left: 8px;
      color: white;
      cursor: pointer;
    }
  }
  .result-box {
    margin-top: 5px;
    padding: 1px;
    .img-box {
      height: 180px;
      width: 130px;
      border-radius: 5px;
      margin: auto;
      margin-top: 20px;
      position: relative;
      left: 5px;

      img {
        height: 180px;
        width: 130px;
        border-radius: 5px;
      }
    }
    .movie-title {
      text-align: center;
      color: white;
      font-size: 16px;
      margin-top: 5px;
      margin-left: 11px;
    }

    .rating {
      font-size: 11px;
      height: 18px;
      width: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      margin: auto;
      margin-top: 10px;
      i {
        padding-right: 5px;
        font-size: 14px;
        color: #ffff00;
      }
    }
    .details {
      font-size: 15px;
      color: grey;
      text-align: center;
      margin-top: 8px;
    }

    .plot {
      margin-top: 25px;
    }

    .cast {
      margin-top: 8px;
    }
  }

  .result-box .plot h2,
  .result-box .cast h2 {
    font-size: 17px;
    color: white;
  }

  .result-box .plot span,
  .result-box .cast span {
    font-size: 13px;
    color: grey;
  }
`

export const Genre = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  margin-top: 7px;
  div {
    border: 1px solid #a0a0a0;
    font-size: 0.7em;
    padding: 0.2em 1.6em;
    border-radius: 0.4em;
    font-weight: 300;
    color: white;
    transition: all 0.3s;
    cursor: pointer;
  }

  div:hover {
    background: #f00000;
    border-color: #f00000;
    transition: all 0.3s;
  }
`

export const GlobalStyles = styled.div`
  .message {
    text-align: center;
    color: white;
    margin-top: 15px;
    font-size: 17px;
  }
  ::selection {
    background: rgb(100, 149, 237, 0.8);
    color: white;
  }
`

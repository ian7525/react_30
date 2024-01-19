import styled from 'styled-components'

export const CountryGuideBody = styled.div`
  background: #4169e1;
  font-family: 'poppins', sans-serif;
`

export const CountryGuideContainer = styled.div`
  padding: 20px;
  width: 360px;
  background: white;
  border-radius: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .search-box {
    height: 50px;
    width: 100%;
    border: 1px solid grey;
    display: flex;
    align-items: center;
    padding: 10px;
    border-radius: 3px;
    i {
      color: grey;
      font-size: 16px;
      margin-left: 10px;
    }

    input {
      all: unset;
      height: 50px;
      width: 100%;
      padding-left: 5px;
      margin-left: 10px;
    }
  }

  .info-box {
    .flag-and-name {
      width: 100%;

      .flag {
        height: 100px;
        width: 150px;
        margin: auto;
        margin-top: 20px;

        img {
          height: 100px;
          width: 150px;
        }
      }
      .country-name {
        text-align: center;
        text-transform: uppercase;
        font-size: 15px;
        color: #222;
        margin-top: 4px;
      }
    }

    .other-info {
      margin-top: 20px;

      h5 {
        margin-top: 7px;
        font-size: 14px;

        span {
          color: grey;
          font-weight: 500;
          margin-left: 5px;
        }
      }
    }

    .invalid-name-message {
      font-size: 15px;
      color: grey;
      text-align: center;
      margin-top: 15px;
    }
  }

  &::selection {
    background: rgb(100, 149, 237, 0.8);
    color: white;
  }
`

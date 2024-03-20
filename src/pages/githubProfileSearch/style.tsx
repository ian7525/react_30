import styled from 'styled-components'

export const Body = styled.body`
  background: #025bbf;
  font-family: 'Space Mono', monospace;
`

export const Container = styled.div`
  padding: 20px;
  width: 340px;
  background: white;
  border-radius: 7px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .search-box {
    input {
      all: unset;
      height: 30px;
      width: 180px;
      background: #f4f4fe;
      padding: 5px;
      padding-left: 15px;
      font-size: 12px;
      border-radius: 3px;
    }
    button {
      all: unset;
      height: 35px;
      width: 90px;
      background: #025bbf;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 3px;
      font-size: 12px;
      position: absolute;
      right: 20px;
      margin-top: -38px;
      cursor: pointer;
    }
  }

  .user-details {
    margin-top: 22px;
    .img-box {
      height: 95px;
      width: 95px;
      background: red;
      border-radius: 100%;
      img {
        height: 95px;
        width: 95px;
        border-radius: 100%;
      }
    }
    .details {
      width: 190px;
      float: right;
      margin-top: -90px;
      color: black;
      position: relative;
      h3 {
        font-weight: 400;
      }
      .name {
        font-size: 20px;
        text-transform: uppercase;
        font-weight: 500;
      }
      .username {
        font-size: 12px;
        margin-top: 1px;
        color: #025bbf;
      }
      .join-date {
        font-size: 11px;
        position: relative;
        top: 3px;
      }
    }
    .bio {
      font-size: 14px;
      margin-top: 13px;
      margin-left: 4px;
    }
    .user-profile {
      padding: 10px;
      background: #f4f4fe;
      border-radius: 4px;
      height: 95px;
      margin-top: 17px;
      div {
        height: 75px;
        width: 90px;
        float: left;
        text-align: center;
        margin-left: 2px;
        span {
          font-size: 13px;
          position: relative;
          top: 1px;
          color: grey;
        }
        h2 {
          font-size: 30px;
          margin-top: 2px;
        }
      }
    }
  }
`

export const GlobalStyles = styled.div`
  .user-other-details {
    margin-top: 15px;
  }

  .user-other-details > p {
    margin-top: 8px;
    color: grey;
    font-size: 14px;
  }

  .fa-solid,
  .fa-brands {
    color: #596283;
  }

  .message {
    margin-left: 70px;
    margin-top: 5px;
  }

  ::selection {
    background: rgba(100, 149, 237, 0.8);
    color: white;
  }
`

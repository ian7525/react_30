import styled from 'styled-components'

export const Body = styled.body`
  background: #cebea4;
  font-family: 'poppins', sans-serif;
`

export const Container = styled.div`
  padding: 20px;
  width: 350px;
  background: #0d0d0d;
  border-radius: 7px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .add-task-box {
    input {
      all: unset;
      height: 45px;
      width: 230px;
      background: #1e1e1e;
      padding-left: 20px;
      border-radius: 10px;
      color: white;
      transition: all 0.2s;
    }
    .add-btn {
      all: unset;
      height: 45px;
      width: 45px;
      color: #0d0d0d;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 100%;
      background: #ff5631;
      position: absolute;
      top: 20px;
      right: 20px;
      cursor: pointer;
    }
  }

  .all-tasks {
    max-height: 350px;
    margin-top: 20px;

    .clipboard-icon {
      font-size: 85px;
      color: grey;
      text-align: center;
      margin-top: -7px;
    }

    .no-task-message {
      color: grey;
      font-size: 15px;
      text-align: center;
      font-weight: 600;
      margin-top: -13px;
    }

    .task {
      width: 100%;
      background: #1e1e1e;
      border: 0.6px solid #e6d4b6;
      border-radius: 7px;
      padding: 5px;
      display: flex;
      align-items: center;
      height: 50px;
      margin-top: 8px;

      input {
        -webkit-appearance: none;
        height: 20px;
        width: 20px;
        border: 1px solid #ff5631;
        border-radius: 100%;
        margin-left: 13px;
        cursor: pointer;

        &:checked {
          background: #57cb4c;
          border-color: #57cb4c;
        }
      }

      .userTask {
        margin-left: 8px;
        color: #e6d4b6;
        font-weight: 600;
        font-size: 13px;

        &.checked {
          text-decoration: line-through;
        }
      }

      .btns {
        height: 50px;
        width: 50px;
        display: flex;
        align-items: center;
        position: absolute;
        right: 16px;

        .dlt-btn {
          all: unset;
          width: 33px;
          height: 33px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          cursor: pointer;
          font-weight: 200;
          color: #0d0d0d;
          background: #ff5631;
          border-radius: 7px;
        }
      }
    }
  }

  .others {
    margin-top: 23px;
    height: 50px;
    display: flex;
    align-items: center;
    border: 1px solid grey;
    border-radius: 7px;
    padding: 8px;

    .no-of-tasks {
      color: white;
      font-size: 14px;
      margin-left: 12px;
      color: darkgrey;
      position: relative;
      top: 4px;
    }

    .clear-all-btn {
      all: unset;
      height: 30px;
      width: 80px;
      background: #ff5631;
      color: #0d0d0d;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 3px;
      font-size: 12px;
      position: absolute;
      right: 30px;
      cursor: pointer;
      margin-top: -23px;
      font-weight: 500;
    }
  }
`

export const GlobalStyles = styled.div`
  ::selection {
    background: rgb(100, 149, 237, 0.8);
    color: white;
  }
`

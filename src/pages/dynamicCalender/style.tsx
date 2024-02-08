import styled from 'styled-components'

export const DynamicCalenderBody = styled.body`
  background: #161616;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
`

export const DynamicCalenderContainer = styled.div`
  background: #161616;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;

  table {
    margin: 50px 30px 40px 30px;

    tr:first-child td {
      color: #4a359c;
      font-size: 24px;
    }

    tr:first-child td:hover {
      background: #f5f5f5;
      color: black;
    }

    td {
      height: 55px;
      width: 55px;
      border-radius: 5px;
      font-size: 24px;
      cursor: pointer;
      position: relative;
      top: 10px;
      font-family: 'poppins', sans-serif;
    }

    td:hover {
      background: #f5f5f5;
      transition: all 0.2s ease;
    }

    .next-btn {
      margin-right: 20px;
    }
  }
`

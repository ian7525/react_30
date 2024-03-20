import styled from 'styled-components'

export const Body = styled.body`
  background: #ffbc13;
  font-family: 'poppins', sans-serif;
`

export const Container = styled.div`
  padding: 30px;
  width: 380px;
  background: #232534;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  padding-bottom: 30px;

  h2 {
    text-align: center;
    font-size: 17px;
    letter-spacing: 2px;
    color: white;
    margin-top: 3px;
    text-transform: uppercase;
  }

  .reset-btn {
    all: unset;
    height: 40px;
    width: 120px;
    background: #ffbc13;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    margin: auto;
    margin-top: 18px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 12px;
    cursor: pointer;
    background: white;
  }

  .game {
    width: 100%;
    height: 350px;
    margin-top: 25px;
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
    transform-style: preserve-3d;
    perspective: 500px;
  }
`

export const Item = styled.div`
  position: relative;
  height: 74px;
  width: 74px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  transition: all 0.25s;
  transform: rotateY(180deg);
  .boxOpen {
    transform: rotateY(0deg);
  }
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: #ffbc13;
    transition: all 0.25s;
    transform: rotateY(0deg);
    backface-visibility: hidden;
  }
`

export const GlobalStyles = styled.div`
  .boxOpen::after,
  .boxMatch::after {
    transform: rotateY(180deg);
  }

  ::selection {
    background: white;
    color: #232534;
  }
`

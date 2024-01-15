import styled from 'styled-components'

export const AnologClockBody = styled.body`
  background: #bbe1fa;
  font-family: 'poppins', sans-serif;
`

export const AnologClockContainer = styled.div`
  height: 330px;
  width: 330px;
  border-radius: 100%;
  background: #f5f5f5;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &::before {
    content: '';
    height: 320px;
    width: 320px;
    background: white;
    border-radius: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }

  .pre-container {
    height: 265px;
    width: 265px;
    background: #f5f5f5;
    border-radius: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .centernut {
      height: 20px;
      width: 20px;
      border-radius: 100%;
      background: #848484;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border: 3px solid white;
      z-index: 4;
    }

    .indicator {
      position: absolute;
      top: 49.5%;
      left: 50%;
      transform: translate(-50%, -50%);

      div {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 5px;
        width: 2px;
        background: #848484;

        &:nth-child(1) {
          transform: rotate(30deg) translateY(-113px);
        }

        &:nth-child(2) {
          transform: rotate(60deg) translateY(-113px);
        }

        &:nth-child(3) {
          transform: rotate(90deg) rotateZ(-90deg) translateY(-10px)
            translateX(100px);
          background: #f5f5f5;
        }

        &:nth-child(4) {
          transform: rotate(120deg) translateY(-113px);
        }

        &:nth-child(5) {
          transform: rotate(150deg) translateY(-113px);
        }

        &:nth-child(6) {
          transform: rotate(180deg) rotateZ(180deg) translateY(100px)
            translateX(-5px);
          background: #f5f5f5;
        }

        &:nth-child(7) {
          transform: rotate(210deg) translateY(-113px);
        }

        &:nth-child(8) {
          transform: rotate(240deg) translateY(-113px);
        }

        &:nth-child(9) {
          transform: rotate(270deg) rotateZ(90deg) translateX(-110px)
            translateY(-10px);
          background: #f5f5f5;
        }

        &:nth-child(10) {
          transform: rotate(300deg) translateY(-113px);
        }

        &:nth-child(11) {
          transform: rotate(330deg) translateY(-113px);
        }

        &:nth-child(12) {
          transform: rotate(360deg) translateY(-113px);
          background: #f5f5f5;
        }
      }
    }
  }
`

interface StyledDivProps {
  rotateZ: number
}

export const AnologClockSecondHand = styled.div<StyledDivProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 3;
  transform: rotateZ(${(props) => props.rotateZ}deg);

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -100%);
    width: 3px;
    height: 115px;
    background: #4169e1;
    border-radius: 30px;
    width: 2px;
    background: #ff5c5c;
    border-radius: 30px;
  }
`

export const AnologClockMinHand = styled.div<StyledDivProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  transform: rotateZ(${(props) => props.rotateZ}deg);

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -100%);
    width: 3px;
    height: 115px;
    background: #4169e1;
    border-radius: 30px;
    height: 100px;
    background: #d6d6d6;
    width: 4px;
  }
`

export const AnologClockHourHand = styled.div<StyledDivProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  transform: rotateZ(${(props) => props.rotateZ}deg);

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -100%);
    width: 3px;
    height: 115px;
    background: #4169e1;
    border-radius: 30px;
    width: 6px;
    height: 65px;
    background: #848484;
  }
`

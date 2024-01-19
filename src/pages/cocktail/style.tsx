import styled from 'styled-components'

export const CocktailBody = styled.body`
  font-family: 'poppins', sans-serif;
  background: #00a292;
`

interface StyledDivProps {
  infoboxdisplay: string
  dispmsgdisplay: string
}
export const CocktailContainer = styled.div<StyledDivProps>`
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
    display: ${(props) => (props.dispmsgdisplay ? props.dispmsgdisplay : '')};
    color: grey;
    font-size: 13px;
    text-align: center;
    margin-top: 10px;
  }

  .cocktail-img {
    height: 150px;
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    margin-top: 30px;
    overflow: hidden;
    border-radius: 100%;

    img {
      height: 150px;
      width: 150px;
      border-radius: 100%;
    }
  }

  .info-box {
    .cocktail-name {
      height: 35px;
      background: #00a292;
      color: white;
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 30px;
      margin-top: -5px;
      padding-left: 15px;
      padding-right: 15px;
      white-space: nowrap;
      i {
        padding-right: 3px;
      }
    }
  }

  .ingredients-box,
  .instructions-box {
    width: 100%;
    margin-top: 40px;
    padding: 5px;

    h3 {
      font-size: 14px;
      position: relative;
      top: 5px;
      margin-left: 5px;
      font-weight: 600;
    }
  }

  .ingredients-box {
    .ingredients {
      ul {
        display: grid;
        grid-template-columns: auto auto;
        gap: 0.8em 1.1em;
        padding: 1.2em 0 0 1.2em;
        font-size: 1em;
      }
      li {
        font-size: 12px;
        margin-top: -3px;
      }
    }
  }

  .instructions-box {
    margin-top: 10px;

    h3 {
      margin-left: 0px;
      padding-bottom: 8px;
      margin-top: -1px;
    }
    .instruction {
      font-size: 12px;
      margin-top: 10px;
    }
  }

  .info-box {
    display: ${(props) =>
      props.infoboxdisplay ? props.infoboxdisplay : 'none'};
  }

  &::selection {
    background: rgb(100, 149, 237, 0.8);
    color: white;
  }
`

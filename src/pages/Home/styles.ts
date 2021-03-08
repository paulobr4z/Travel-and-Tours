import styled from 'styled-components';

import background from '../../assets/img/bg.jpg';

export const Background = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  background-image: url(${background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -999;
  filter: brightness(60%);
`;

export const HeaderContainer = styled.div`
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;

  h1 {
    font-size: 68px;
  }

  h3 {
    margin: 25px;
    text-align: center;
  }

  div {
    display: flex;

    button {
      margin: 15px;
      padding: 25px 80px;
      color: white;
      background-color: transparent;
      border: 2px solid #fff;
      border-radius: 5px;
      font-family: Montserrat;
      transition: all 0.2s;
    }

    button:hover {
      background-color: white;
      color: black;      
    }
  }
`;

export const ServicesContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #999;

  h1 {
    padding: 20px 0px 100px 0px;
  }

  .teste {
    display: flex;
    align-items: center;
    justify-content:space-around;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1420px;
    margin-bottom: 30px;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 300px;
      width: 400px;
      margin: 14px;
      border-radius: 5px;
      transition: all 0.2s;
    }

    div:hover {
      transform: scale(1.1);
    }

    img {
      width: 100px;
      margin: 15px;
    }

    h3 {
      font-size: 32px;
      margin-bottom: 15px;
    }

    p {
      text-align: center;
      line-height: 30px;
    }

  }

`;

export const GalleryContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: brown;

  h1 {
    margin-bottom: 50px;
  }
`;



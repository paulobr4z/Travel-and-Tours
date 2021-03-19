import styled from 'styled-components';

import background from '../../assets/img/bg.jpg';

export const HeaderContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 0px 14px;
  z-index: -999;

  &::after {
    content: "";
    position: absolute;
    background-image: url(${background});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 75vh;
    width: 70%;
    right: 0;
    opacity: 0.8;
    z-index: -1;

    @media (max-width: 800px) {
      width: 100%;
    }
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 1420px;
  color: black;

  @media (max-width: 800px) {
    align-items: center;
  }

  h1 {
    font-size: 80px;
    margin-bottom: 20px;

    @media (max-width: 800px) {
      font-size: 42px;
    }
  }

  h2 {
    width: 100%;
    max-width: 600px;
    line-height: 1.8;
    margin-bottom: 20px;

    @media (max-width: 800px) {
      font-size: 16px;
    }
  }

  div {
    display: flex;

    button {
      margin: 15px 0px;
      padding: 25px 80px;
      color: #000;
      background-color: transparent;
      border: 2px solid #000;
      border-radius: 4px;
      font-family: Montserrat;
      font-weight: bold;
      transition: all 0.2s;

      @media (max-width: 800px) {
        padding: 15px 40px;
        font-size: 14px;
      }
    }

    button:hover {
      background-color: black;
      color: white;      
    }
  }
`;

export const ServicesContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    padding: 100px 0px;
    font-size: 45px;
    text-decoration: underline;
  }

  .servicesWrapper {
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 100px;

  h1 {
    padding: 100px 0px;
    font-size: 45px;
    text-decoration: underline;
  }
`;

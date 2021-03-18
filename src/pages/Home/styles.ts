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

  &::before {
    content: "";
    position: absolute;
    background-image: url(${background});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    width: 100%; 
    z-index: -1;
    filter: brightness(60%);
  }

  h1 {
    font-size: 80px;

    @media (max-width: 1024px) {
      font-size: 42px;
    }
  }

  h3 {
    margin: 25px;
    text-align: center;

    @media (max-width: 1024px) {
      font-size: 16px;
    }
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

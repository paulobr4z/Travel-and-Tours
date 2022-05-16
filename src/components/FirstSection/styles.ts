import styled from 'styled-components';

import background from '../../assets/img/home.jpg';

export const HeaderContainer = styled.div`
  height: 760px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: -999;

  .backgroundHeader {
    position: absolute;
    top: 80px;
    height: 600px;
    width: 100%;
    max-width: 1420px;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      z-index: -1;
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
  padding-left: 120px;
  z-index: 1;

  @media (max-width: 1024px) {
    align-items: center;
    padding-left: 0;
  }

  h1 {
    font-size: 80px;
    max-width: 800px;
    font-family: 'Ubuntu', sans-serif;
    line-height: 1;
    margin-bottom: 20px;

    @media (max-width: 1024px) {
      font-size: 58px;
    }

    @media (max-width: 825px) {
      font-size: 42px;
      text-align: center;
    }
  }

  h2 {
    width: 100%;
    max-width: 500px;
    line-height: 2;
    font-family: 'Montserrat', sans-serif;
    margin-bottom: 20px;
    font-size: 18px;

    @media (max-width: 1024px) {
      text-align: center;
    }

    @media (max-width: 825px) {
      font-size: 16px;
      text-align: center;
    }
  }

  div {
    display: flex;

    button {
      padding: 18px 60px;
      color: #ffffff;
      background-color: #000000;
      border-radius: 4px;
      font-size: 14px;
      font-weight: bold;
      transition: all 0.2s;
      border: none;

      @media (max-width: 800px) {
        padding: 15px 40px;
        font-size: 14px;
      }
    }
  }
`;

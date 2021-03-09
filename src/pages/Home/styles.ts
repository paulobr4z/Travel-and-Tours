import styled from 'styled-components';

import background from '../../assets/img/bg.jpg';

export const Background = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  height: calc(100% + 100px);
  width: 100%;
  background-image: url(${background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -999;
  filter: brightness(60%);
`;

export const HeaderContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 0px 14px;

  h1 {
    font-size: 68px;

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


export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #202124;
  padding: 14px;

  .footerWrapper {
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1420px;
    padding: 70px 0px;
    border-bottom: 1px solid white;

    @media (max-width: 850px) {
      flex-direction: column;
    }

    .footerSection {
      color: white;
      margin: 15px;

      @media (max-width: 850px) {
        flex-grow: 1;
      }

      p {
        margin-bottom: 10px;
        cursor: pointer;
      }

      p:nth-child(1) {
        font-weight: bold;
        margin-bottom: 20px;
      }

      input {
        border: 1px solid white;
        border-radius: 5px;
        background-color: transparent;
        padding: 10px;
        color: white;
        transition: all 0.1s; 
      }

      input:focus {
        filter: brightness(150%);

      }
      
      input::placeholder {
        font-style: italic;
        font-weight: bold;
      }
    }
  }
`;

export const Copyright = styled.div`
  color: white;
  margin: 50px 14px 14px 14px;
  font-size: 14px;
  text-align: center;

  a {
    color: white;
  }  
`;

export const FooterIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  width: 300px;
  margin-bottom: 50px;

  a {
    color: white;
  }
`;
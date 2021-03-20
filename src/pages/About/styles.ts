import styled from 'styled-components';

import background from '../../assets/img/about.jpg';

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
      height: 60vh;
      width: 70%;
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
      text-align: center;
    }
  }
`;

export const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-height: 100vh;
  width: 100%;

  .imgContainer {
    width: 100%;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }

    @media (max-width: 1024px) {
      max-width: 800px;
      margin: 0px;
    }
  }

  .content {
    width: 100%;
    line-height: 2.2;
    padding: 0px 50px;

    @media (max-width: 1024px) {
      max-width: 800px;
      padding: 20px;
    }
  }

  button {
    margin-top: 25px;
    background-color: white;
    color: black;
    padding: 15px 30px;
    border: none;
    border-radius: 4px;
    border: 2px solid black;
    letter-spacing: 0.2rem;
    font-weight: 400;
    background-color: transparent;
    transition: all 0.2s;

    @media (max-width: 1024px) {
      margin-bottom: 25px;
    }
  }

  button:hover {
    background-color: black;
    color: white;
  }
`;

export const AboutWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1420px;
  margin: 14px;
  background-color: #e6eaea;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 14px;
`;

export const TeamWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1420px;

  h1 {
    padding-top: 100px;
    padding-bottom: 20px;
    font-size: 45px;
    text-decoration: underline;
  }

  h2 {
    margin-bottom: 20px;
  }

  p {
    text-align: center;
    margin-top: 20px;
    max-width: 730px;
    line-height: 25px;
  }
`;

export const ProfileWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  grid-gap: 25px;
  justify-items: center;
  width: 100%;
  max-width: 1230px;
  margin: 100px 0px; 
`;

export const Profile = styled.div`
  width: 100%;
  max-width: 500px;

  .profileImage {
    height: 300px;
    border: 2px solid #000;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  .profileTitle {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: white;
    text-align: center;
    border: 2px solid #000;
    border-top: 0px;
  }
`;
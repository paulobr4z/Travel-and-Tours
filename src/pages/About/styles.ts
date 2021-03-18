import styled from 'styled-components';

import background from '../../assets/img/about.jpg';

export const HeaderContainer = styled.div`
  height: 70vh;
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
    height: 70%;
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
    margin-right: 50px;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }

    @media (max-width: 1024px) {
      max-width: 800px;
      margin: 25px 0px;
    }

  }

  .content {
    width: 100%;
    line-height: 2.2;

    @media (max-width: 1024px) {
      max-width: 800px;
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

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TeamWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1420px;

  h1 {
    margin-top: 50px;
    margin-bottom: 20px;
  }

  h2 {
    margin-bottom: 20px;
  }

  p {
    text-align: center;
    margin-top: 20px;
    max-width: 730px;
    line-height: 25px;
    text-transform: uppercase;
  }
`;

export const ProfileWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 14px;
  justify-items: center;
  width: 100%;
  max-width: 1300px;
  margin: 50px 0px; 
`;

export const Profile = styled.div`
  width: 100%;
  max-width: 500px;

  .profileImage {
    height: 300px;

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
  }
`;
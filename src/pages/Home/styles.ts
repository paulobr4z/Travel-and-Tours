import styled from 'styled-components';

export const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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
      text-align: center;
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

import styled from 'styled-components';

export const Background = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  background-image: url('https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -999;
  filter: brightness(60%) contrast(150%);
`;

export const HeaderContainer = styled.div`
  height: 100vh;
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
    /* border: 1px solid green; */

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 300px;
      width: 400px;
      margin: 14px;
      /* border: 1px solid black; */
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

// export const ServicesWrapper = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     flex-grow: 1;
//     flex-wrap: wrap;
//     width: 100%;
//     max-width: 1420px;
//     border: 1px solid black;
// `;


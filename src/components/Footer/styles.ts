import styled from 'styled-components';

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #000;
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
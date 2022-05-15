import styled from 'styled-components';

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 0px;
`;

export const ContactTitle = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1420px;
  margin-bottom: 16px;
  font-size: 22px;
  margin: 32px 0;
  text-decoration: underline;
  text-align: center;
`;

export const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1420px;
  padding: 50px 14px;

  @media (max-width: 1024px) {
    flex-direction: column;
  }

  form {
    display: flex;
    flex-direction: column;
    padding: 50px;
    width: 100%;
    max-width: 700px;
    box-shadow: 0 3px 20px -5px rgb(0 0 0 / 50%);

    @media (max-width: 1024px) {
      padding: 20px;
    }

    label {
      margin: 10px 0px;
    }

    input {
      margin-bottom: 10px;
      border: 2px solid black;
      border-radius: 4px;
      padding: 15px;
    }

    input[type=submit] {
      margin-top: 50px;
      background-color: white;
      color: black;
      padding: 15px 30px;
      border: none;
      border-radius: 4px;
      border: 2px solid black;
      letter-spacing: 0.2rem;
      font-weight: 400;
      transition: all 0.2s;
    }

    input[type=submit]:hover {
      background-color: black;
      color: white;
    }

    textarea {
      border: 2px solid black;
      border-radius: 4px;
      height: 200px;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    margin: 80px 50px 0px 80px;


    @media (max-width: 1024px) {
      margin: 80px 0px 0px 0px;
    }

    p {
      margin-bottom: 10px;
      letter-spacing: .2rem;
      font-weight: bold;

      @media (max-width: 1024px) {
        font-size: 14px;
      }
    }

    h1 {
      line-height: 1.8;
      margin-bottom: 30px;
      font-size: 28px;

      @media (max-width: 1024px) {
        font-size: 20px;
      }

    }
  }
`;
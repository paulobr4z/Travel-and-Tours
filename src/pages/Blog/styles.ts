import styled from 'styled-components';

import background from '../../assets/img/bg.jpg';

export const HeaderContainer = styled.div`
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 0px 14px;

  &::before {
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

export const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #e0e0e0;
  padding: 50px 0px;
`;

export const BlogWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1420px;  
`;

export const BlogMain = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  grid-gap: 14px;
  justify-items: center;
  padding: 14px;
  width: 100%;
  max-width: 850px;

`;

export const PostContainer = styled.div`
  width: 100%;
  max-width: 500px;

  .postImage {
    height: 300px;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  .postTitle {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100px;
    background-color: white;
    padding-left: 14px;
  }
`;

export const BlogAside = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 14px;

  @media (max-width: 350px) {
    margin: 0;
  }

  .searchContainer {
    display: flex;
    align-items: center;
    height: 100px;
    width: 100%;
    background-color: white;
    padding: 20px;
    margin-bottom: 20px;

    input {
      width: 100%;
      padding: 10px;
      border-radius: 5px;
      border: 2px solid #e0e0e0;
    }
  }
`;

export const PopularContainer = styled.div`
  display: flex;
  background-color: white;
  margin-bottom: 20px;

  .popularImage {
    height: 150px;
    width: 200px;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  .popularTitle {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 14px;

    p {
      font-size: 12px;
    }
  }
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 100%;
  margin-top: 25px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background-color: white;
    margin: 14px;
  }

  div:nth-child(1) {
    background-color: black;
    color: white;
  }
`;

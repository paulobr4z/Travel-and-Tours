import styled from 'styled-components';

import background from '../../assets/img/bg.jpg';

export const Background = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  height: calc(70% + 100px);
  width: 100%;
  background-image: url(${background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -999;
  filter: brightness(60%);
`;

export const HeaderContainer = styled.div`
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 0px 14px;

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

export const BlogMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  max-width: 880px;
  border: 1px solid black;
`;

export const PostContainer = styled.div`
  height: 500px;
  width: 100%;
  max-width: 400px;
  margin: 14px;

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

export const BlogWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1420px;
  border: 1px solid brown;
  
  @media (max-width: 1430px) {
    width: 900px;
  }
`;

export const BlogAside = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 14px;
  border: 1px solid brown;

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
  justify-content: flex-start;
  height: 100px;
  width: 100%;

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

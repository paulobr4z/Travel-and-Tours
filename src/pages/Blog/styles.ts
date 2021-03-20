import styled from 'styled-components';

import background from '../../assets/img/blog.jpg';

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


export const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 50px 0px;
  background-color: white;
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
  grid-gap: 25px;
  justify-items: center;
  padding: 14px;
  width: 100%;
  max-width: 850px;

`;

export const PostContainer = styled.div`
  width: 100%;
  max-width: 500px;
  box-shadow: 0 3px 20px -5px rgb(0 0 0 / 50%);

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
    border-top: 0px;
    background-color: #e6eaea;
  }
`;

export const BlogAside = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 0px 14px;

  @media (max-width: 350px) {
    margin: 0;
  }

  .searchContainer {
    display: flex;
    align-items: center;
    height: 100px;
    width: 100%;
    max-width: 470px;

    input {
      width: 100%;
      padding: 10px;
      border-radius: 5px;
      border: 2px solid #cccccc;

    }
  }
`;

export const PopularContainer = styled.div`
  display: flex;
  background-color: white;
  margin-bottom: 20px;
  box-shadow: 0 3px 20px -5px rgb(0 0 0 / 50%);


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
    padding: 0px 14px;
    background-color: #e6eaea;
    border-left: 0px;
    width: 100%;

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
    cursor: pointer;
    border: 2px solid black;
    font-weight: bold;
  }

  div:nth-child(1) {
    background-color: black;
    color: white;
  }

  div:hover {
    background-color: black;
    color: white;    
  }
`;

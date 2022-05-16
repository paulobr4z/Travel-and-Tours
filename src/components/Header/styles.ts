import styled from 'styled-components';

interface MenuProps {
  click?: boolean;
  scroll: number
}

export const Header = styled.div<MenuProps>`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  width: 100%;
  background: #ffffff;
  transition: all 1s;
  z-index: 999;
  box-shadow: ${({ click, scroll }) => scroll > 1 && !click ? '0px 2px 4px rgba(48, 46, 69, 0.06)' : 'none'};

  span {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1420px;
    margin: 0 32px;

    @media (max-width: 1024px) {
      margin: 0 16px;
    }
  }

  h1 {
    font-size: 18px;

    @media (max-width: 800px) {
      font-size: 16px;
    }
  }

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: ${({click}) => click ? 0 : 1};
    transition: all 0.8s;
    column-gap: 8px;

    img {
      width: 40px;

      @media (max-width: 800px) {
        width: 30px;
      }
    }
  }
  
`;

export const Checkbox = styled.div<MenuProps>`
  cursor: pointer;

  div {
    height: 3px;
    width: 36px;
    background-color: #000;
    margin-bottom: 6px;
    border-radius: 100px;
    transform-origin: 5px;
    transition: 0.5s ease-in-out;

    @media (max-width: 800px) {
      height: 2px;
      margin-bottom: 4px;
      width: 28px;
      transform-origin: 5.5px;
    }

    &:nth-child(1) {
      transform: ${({click}) => click ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      transform: ${({click}) => click ? 'translateX(-100%)' : 'translateX(0)'};
      opacity: ${({click}) => click ? 0 : 1};
    }

    &:nth-child(3) {
      transform: ${({click}) => click ? 'rotate(-45deg)' : 'rotate(0)'};
    }

  }
`;

export const MenuContainer = styled.div<MenuProps>`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #fff;
  opacity: ${({click}) => click ? '1' : '0'};
  visibility: ${({click}) => click ? 'visible' : 'hidden'};
  transition: all 1s;
  z-index: 999;

  li {
    list-style-type: none;
    font-size: 42px;
    line-height: 1.8;
    font-weight: bold;
    text-decoration: underline;

    @media (max-width: 800px) {
      font-size: 32px;
    }
  }

  a {
    text-decoration: none;
    color: #000;
  }

  a:hover {
    text-decoration: underline;      
  }

`;


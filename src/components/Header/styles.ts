import styled from 'styled-components';

interface MenuProps {
  click: boolean;
}

export const Header = styled.div`
  position: absolute;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  height: 100px;
  width: 100%;
  max-width: 1420px;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  padding: 0px 14px;
  z-index: 999;

  @media (max-width: 1024px) {
    height: 80px;
  }
  
`;

export const Checkbox = styled.div<MenuProps>`
  cursor: pointer;

  div {
    height: 2px;
    width: 36px;
    background-color: ${({click}) => click ? '#000' : '#fff'};
    margin-bottom: 8px;
    border-radius: 10px;
    transform-origin: 4px;
    transition: 0.5s ease-in-out;

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
  position: absolute;
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
    font-size: 32px;
    margin: 20px;
    text-align: center;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  a:hover {
    text-decoration: underline;      
  }

`;


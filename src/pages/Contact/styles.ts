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

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  a {
   color: white;
   margin: 15px;
  }
`;
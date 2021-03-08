import styled from 'styled-components';

export const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  max-height: 80vh;
  width: 100%;
  max-width: 1420px;
`;

export const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 75vh;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
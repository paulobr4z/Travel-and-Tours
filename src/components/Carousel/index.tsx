import React from 'react';
import { CarouselContainer } from './styles';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

function Carousel() {
  return (
    <>
      <h1>Carousel</h1>
      <CarouselContainer>
        <AiOutlineLeft style={{ fontSize: 40 }} />
        <Carousel />
        <AiOutlineRight style={{ fontSize: 40 }} />
      </CarouselContainer>
    </>
  );
};

export default Carousel;
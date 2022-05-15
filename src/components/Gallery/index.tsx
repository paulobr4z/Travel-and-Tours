import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import './styles.css';

SwiperCore.use([Navigation, Pagination]);

export const Gallery = () => {
  const slides = [];

  for (let i = 0; i < 5; i += 1) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag="li">
        <img
          src={`img/gallery-00${i + 1}.jpg`}
          style={{ listStyle: 'none' }}
          alt={`Slide ${i}`}
        />
      </SwiperSlide>
    );
  }

  return (
    <>
      <Swiper
        id="main"
        tag="section"
        wrapperTag="ul"
        navigation
        pagination
      >
        {slides}
      </Swiper> 
    </>
  );
};
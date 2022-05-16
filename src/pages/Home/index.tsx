import React, { useEffect } from 'react';
import { FirstSection } from '../../components/FirstSection';
import { Gallery } from '../../components/Gallery';
import { Footer } from '../../components/Footer';

import imgFood from '../../assets/img/food.svg';
import imgTravel from '../../assets/img/tourism.svg';
import imgAirplane from '../../assets/img/plane.svg';
import imgBeach from '../../assets/img/beach.svg';
import imgMountain from '../../assets/img/mountain.svg';
import imgBallon from '../../assets/img/balloon.svg';

import {
  ServicesContainer,
  GalleryContainer,
} from './styles';

const Home: React.FC = () => {
  useEffect(() => {
    document.title = 'Home | Travel & Tours';
  });

  return (
    <>
      <FirstSection
        title='Head out on your next travel'
        hasButton
        srcImage='https://raw.githubusercontent.com/paulobr4z/Travel-and-Tours/master/src/assets/img/home.jpg'
      />

      <ServicesContainer>
        <h1>Service</h1>
        <div className='servicesWrapper'>
          <div>
            <img src={imgFood} alt="foods" />
            <h3>Food</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div>
            <img src={imgTravel} alt="foods" />
            <h3>Travel</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div>
            <img src={imgAirplane} alt="foods" />
            <h3>Airplane</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div>
            <img src={imgBeach} alt="foods" />
            <h3>Beach</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div>
            <img src={imgMountain} alt="foods" />
            <h3>Mountain Climbing</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div>
            <img src={imgBallon} alt="foods" />
            <h3>Hot Air Balloon</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </ServicesContainer>

      <GalleryContainer>
        <h1>Gallery</h1>
        <Gallery />
      </GalleryContainer>

      <Footer />

    </>
  );
};

export default Home;

import React from 'react';

import { HeaderContainer, Background, ServicesContainer } from './styles';

import imgFood from '../../assets/img/food.svg';
import imgTravel from '../../assets/img/tourism.svg';
import imgAirplane from '../../assets/img/plane.svg';
import imgBeach from '../../assets/img/beach.svg';
import imgMountain from '../../assets/img/mountain.svg';
import imgBallon from '../../assets/img/balloon.svg';

const Home: React.FC = () => {
  return (
    <>
      <Background />
      <HeaderContainer>
        <h1>Travel e Tours</h1>
        <h3>
          Lorem ipsum is placeholder text commonly used in 
          the graphic, print, and publishing industries.
        </h3>
        <div>
          <button>CONTACT</button>
        </div>
      </HeaderContainer>

      <ServicesContainer>
        <h1>Service</h1>
        <div className='teste'>
          <div>
            <img src={imgFood} alt="foods"/>
            <h3>Food</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur 
              adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div>
            <img src={imgTravel} alt="foods"/>
            <h3>Travel</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur 
              adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div>
            <img src={imgAirplane} alt="foods"/>
            <h3>Airplane</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur 
              adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div>
            <img src={imgBeach} alt="foods"/>
            <h3>Beach</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur 
              adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div>
            <img src={imgMountain} alt="foods"/>
            <h3>Mountain Climbing</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur 
              adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div>
            <img src={imgBallon} alt="foods"/>
            <h3>Hot Air Balloon</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur 
              adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </ServicesContainer>

    </>
  );
};

export default Home;

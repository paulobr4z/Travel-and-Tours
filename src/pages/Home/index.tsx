import React from 'react';
import Gallery from '../../components/Gallery';

import imgFood from '../../assets/img/food.svg';
import imgTravel from '../../assets/img/tourism.svg';
import imgAirplane from '../../assets/img/plane.svg';
import imgBeach from '../../assets/img/beach.svg';
import imgMountain from '../../assets/img/mountain.svg';
import imgBallon from '../../assets/img/balloon.svg';

import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineMail,
  AiOutlineWhatsApp,
  AiOutlineInstagram,
} from 'react-icons/ai';

import {
  HeaderContainer,
  Background,
  ServicesContainer,
  GalleryContainer,
  FooterContainer,
  Copyright,
  FooterIcons,
} from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Background />
      <HeaderContainer>
        <h1>Travel &amp; Tours</h1>
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
        <div className='servicesWrapper'>
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

      <GalleryContainer>
        <h1>Gallery</h1>
        <Gallery />
      </GalleryContainer>

      <FooterContainer>
        <div className="footerWrapper">
          <div className="footerSection">
            <p>Quick Link</p>
            <p>About Us</p>
            <p>Terms &amp; Conditions</p>
            <p>Privacy Policy</p>
            <p>Help</p>
            <p>Rooms</p>
          </div>
          <div className="footerSection">
            <p>Support</p>
            <p>Our Location</p>
            <p>The Hosts</p>
            <p>About</p>
            <p>Contact</p>
            <p>Restaurant</p>
          </div>
          <div className="footerSection">
            <p>Contact Info</p>
            <p>About Us</p>
            <p>Terms &amp; Conditions</p>
            <p>Privacy Policy</p>
            <p>Help</p>
            <p>Rooms</p>
          </div>
          <div className="footerSection">
            <p>Subscribe</p>
            <p>Sign up for our newsletter</p>
            <input type="text" placeholder="Your email..."/>
          </div>
        </div>
        <Copyright>
          Copyright © 2021 All rights reserved | This template is made by <a href="paulobraz.com" target="_blank" rel="noreferrer">paulobraz.com</a>
        </Copyright>
        <FooterIcons>
          <a href="https://github.com/paulobr4z" target="_blank" rel="noreferrer">
            <AiFillGithub style={{ fontSize:24 }} />
          </a>
          <a href="https://www.linkedin.com/in/paulobr4z/" target="_blank" rel="noreferrer">
            <AiFillLinkedin style={{ fontSize:24 }} />
          </a>
          <a href="mailto:paulobrazaraujo@gmail.com" target="_blank" rel="noreferrer">
            <AiOutlineMail style={{ fontSize:24 }} />
          </a>
          <a href="https://wa.me/5594981147978" target="_blank" rel="noreferrer">
            <AiOutlineWhatsApp style={{ fontSize:24 }} />
          </a>
          <a href="https://www.instagram.com/paulobr4z/" target="_blank" rel="noreferrer">
            <AiOutlineInstagram style={{ fontSize:24 }} />
          </a>
        </FooterIcons>
      </FooterContainer>

    </>
  );
};

export default Home;

import React from 'react';

import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineMail,
  AiOutlineWhatsApp,
  AiOutlineInstagram,
} from 'react-icons/ai';

import { FooterContainer, Copyright, FooterIcons } from './styles';

function getYears() {
  const year = new Date().getFullYear();

  return year;  
}

export const Footer = () => {
  return (
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
        Copyright © {getYears()} - All rights reserved | <a href="paulobraz.com" target="_blank" rel="noreferrer">paulobraz.com</a>
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
  );
};
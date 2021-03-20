import React, { useEffect } from 'react';
import Footer from '../../components/Footer';
import {
  HeaderContainer,
  HeaderWrapper,
  ContactContainer,
  ContactWrapper,
} from './styles';

const Contact: React.FC = () => {
  useEffect(() => {
    document.title = 'Contact | Travel & Tours';
  });
  return (
    <>
      <HeaderContainer>
        <HeaderWrapper>
          <h1>Contact</h1>
          <h2>
            Lorem ipsum is placeholder text commonly used in 
            the graphic, print, and publishing industries.
          </h2>
        </HeaderWrapper>
      </HeaderContainer>
      <ContactContainer>
        <ContactWrapper>
          <form>
            <label>Nome</label>
            <input type="text" name="name"/>
            <label>Phone</label>
            <input type="number" name="phone"/>
            <label>Email</label>
            <input type="email" name="email"/>
            <label>Write Message</label>
            <textarea name="message"></textarea>
            <input type="submit" value="Enviar"/>
          </form>
          <div>
            <p>ADDRESS:</p>
            <h1>98 West 21th Street, New York - NY</h1>
            <p>PHONE:</p>
            <h1>(+55) 98114 7978</h1>
            <p>EMAIL:</p>
            <h1>paulobrazaraujo@gmail.com</h1>
          </div>
        </ContactWrapper>
      </ContactContainer>

      <Footer />
      
    </>
  );
};

export default Contact;

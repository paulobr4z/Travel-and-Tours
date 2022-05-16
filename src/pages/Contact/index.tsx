import React, { useEffect } from 'react';
import { FirstSection } from '../../components/FirstSection';
import { Footer } from '../../components/Footer';
import {
  ContactContainer,
  ContactWrapper,
  ContactTitle,
} from './styles';

const Contact: React.FC = () => {
  useEffect(() => {
    document.title = 'Contact | Travel & Tours';
  });
  return (
    <>
      <FirstSection
        title='Contact'
        srcImage='https://raw.githubusercontent.com/paulobr4z/Travel-and-Tours/master/src/assets/img/contact.jpg'
      />

      <ContactContainer>
        <ContactTitle>
          <h1>Contact Us</h1>
        </ContactTitle>
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

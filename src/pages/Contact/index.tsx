import React from 'react';
import Footer from '../../components/Footer';
import {
  HeaderContainer,
  ContactContainer,
  ContactWrapper,
} from './styles';

const Contact: React.FC = () => {
  return (
    <>
      <HeaderContainer>
        <h1>Contact</h1>
        <h3>
          Lorem ipsum is placeholder text commonly used in 
          the graphic, print, and publishing industries.
        </h3>
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
            <h1>98 West 21th Street, Suite 721 New York NY 10016</h1>
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

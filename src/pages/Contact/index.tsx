import React from 'react';
import { Link } from 'react-router-dom';
import { Background, Container } from './styles';

const Contact: React.FC = () => {
  return (
    <>
      <Background />
      <Container>
        <h1>Contact</h1>
        <Link to="/">voltar</Link>
      </Container>
    </>
  );
};

export default Contact;

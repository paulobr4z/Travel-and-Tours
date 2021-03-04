import React from 'react';
import { Link } from 'react-router-dom';
import { Background, Container } from './styles';

const About: React.FC = () => {
  return (
    <>
      <Background />
      <Container>
        <h1>About</h1>
        <Link to="/">voltar</Link>
      </Container>
    </>
  );
};

export default About;

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import About from '../pages/About';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';
import Home from '../pages/Home';

import Header from '../components/Header';

const Routes: React.FC = () => (
  <>
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/blog" component={Blog} />
    </Switch>
  </>
);

export default Routes;

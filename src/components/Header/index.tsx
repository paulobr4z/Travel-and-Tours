import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Header, Checkbox, MenuContainer } from './styles';

function Menu () {
  const [click, setClick] = useState(false);

  return (
    <>    
      <Header>
        <h1>Logo</h1>
        <Checkbox click={click} onClick={() => setClick(!click)}>
          <div></div>
          <div></div>
          <div></div>
        </Checkbox>
      </Header>

      <MenuContainer click={click}>
        <ul>
          <li>
            <Link to="/" onClick={() => setClick(false)} >Home</Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setClick(false)} >About</Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setClick(false)} >Contact</Link>
          </li>
        </ul>
      </MenuContainer>
    </>
  );
};

export default Menu;

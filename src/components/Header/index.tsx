import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Header, Checkbox, MenuContainer } from './styles';

function Menu () {
  const [click, setClick] = useState(false);

  return (
    <>
      <MenuContainer click={click}>
        <ul>
          <li>
            <Link to="/" onClick={() => setClick(false)}>Home</Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setClick(false)}>About</Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setClick(false)}>Contact</Link>
          </li>
        </ul>
      </MenuContainer>

      <Header>
        <h1>TT</h1>
        <Checkbox click={click} onClick={() => setClick(!click)}>
          <div></div>
          <div></div>
          <div></div>
        </Checkbox>
      </Header>

    </>
  );
};

export default Menu;

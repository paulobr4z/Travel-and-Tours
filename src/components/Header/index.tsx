import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Header, Checkbox, MenuContainer } from './styles';

import logo from '../../assets/img/logo.png';

function Menu () {
  const [click, setClick] = useState(false);
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => setScroll(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, []);

  return (
    <>
      <MenuContainer click={click} scroll={scroll}>
        <ul>
          <li>
            <Link to="/" onClick={() => setClick(false)}>Home</Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setClick(false)}>About</Link>
          </li>
          <li>
            <Link to="/blog" onClick={() => setClick(false)}>Blog</Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setClick(false)}>Contact</Link>
          </li>
        </ul>
      </MenuContainer>

      <Header click={click}  scroll={scroll}>
        <span>
          <Link to="/" >
            <div className="logo">

              <img src={logo} alt="logo" />

              <h1>Travel &amp; <br /> Tours</h1>
            </div>
          </Link>          
          
          <Checkbox click={click} onClick={() => setClick(!click)}  scroll={scroll}>
            <div></div>
            <div></div>
            <div></div>
          </Checkbox>

        </span>
      </Header>

    </>
  );
};

export default Menu;

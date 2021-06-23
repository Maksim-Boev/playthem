import React from 'react';
import { NavList, Wrapper, Link } from './StyledComponent';
import StartBtn from '../Buttons/StartBtn';
import logo from '../../shared/assets/img/logo.svg';
import { Logo } from '../Header/StyledComponets';
import navLinks from '../../shared/constants/navLinks';

const Navbar = () => {
  return (
    <Wrapper>
      <Link to="/">
        <Logo src={logo} alt="logo" />
      </Link>

      <NavList>
        {navLinks.map((item) => (
          <Link activeClassName="navbar-active" key={item} to={`/${item.link}`}>
            {item.title}
          </Link>
        ))}
        <StartBtn background />
      </NavList>
    </Wrapper>
  );
};

export default Navbar;

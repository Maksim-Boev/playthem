import React from 'react';

import { NavList, Wrapper, Link, LogIn } from './StyledComponent';
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
          <Link
            activeClassName="navbar-active"
            key={item.link}
            to={`/${item.link}`}
          >
            {item.title}
          </Link>
        ))}
        <LogIn href="https://60d3c5895cb94045fecc2ace--determined-payne-766135.netlify.app/#/login">
          LogIn
        </LogIn>

        <StartBtn background />
      </NavList>
    </Wrapper>
  );
};

export default Navbar;

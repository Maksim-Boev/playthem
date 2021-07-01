import React from 'react';

import { NavList, Wrapper, Link, LogIn } from './StyledComponent';
import StartBtn from '../Buttons/StartBtn';
import logo from '../../shared/assets/img/logo.svg';
import { Logo } from '../Header/StyledComponets';
import navLinks from '../../shared/constants/navLinks';
import Languages from '../Languages';

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
        <LogIn href="https://60d9d83432286881ded1800c--nostalgic-edison-c9b8d2.netlify.app/#/login">
          LogIn
        </LogIn>

        <StartBtn />

        <Languages />
      </NavList>
    </Wrapper>
  );
};

export default Navbar;

import React from 'react';
import { NavList, Wrapper, Link } from './StyledComponent';
import StartBtn from '../../Buttons/StartBtn';
import logo from '../../../shared/assets/img/logo.png';
import { Logo } from '../StyledComponets';

const Navbar = () => {
  const navBtn = [
    'Our Games',
    'Platform',
    'Use Case',
    'Pricing',
    'Blog',
    'Log In'
  ];
  return (
    <Wrapper>
      <Link to="/">
        <Logo src={logo} alt="logo" />
      </Link>

      <NavList>
        {navBtn.map((item) => (
          <Link activeClassName="navbar-active" key={item} to={`/${item}`}>
            {item}
          </Link>
        ))}
        <StartBtn />
      </NavList>
    </Wrapper>
  );
};

export default Navbar;

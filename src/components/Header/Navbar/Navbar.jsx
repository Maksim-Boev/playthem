import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavList, NavListItem, Wrapper } from './StyledComponent';
import StartBtn from '../../Buttons/StartBtn';
import logo from '../../../ shared/assets/img/logo.png';
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
      <NavLink to="/">
        <Logo src={logo} alt="logo" />
      </NavLink>

      <NavList>
        {navBtn.map((item) => (
          <NavLink key={item} to={`/${item}`}>
            <NavListItem key={item}>{item}</NavListItem>
          </NavLink>
        ))}
        <StartBtn />
      </NavList>
    </Wrapper>
  );
};

export default Navbar;

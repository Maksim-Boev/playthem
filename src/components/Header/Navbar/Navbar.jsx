import React from 'react';
import { NavList, NavListItem, Wrapper } from './StyledComponent';
import StartBtn from '../../Buttons/StartBtn';
import logo from '../../../assets/img/logo.png';
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
      <Logo src={logo} alt="logo" />
      <NavList>
        {navBtn.map((item) => (
          <NavListItem key={item}>{item}</NavListItem>
        ))}
        <StartBtn />
      </NavList>
    </Wrapper>
  );
};

export default Navbar;

import React from 'react';
import Wrapper, { LinkFooter } from './style';
import logoFooter from '../../shared/assets/icons/logo-footer.svg';
import StartBtn from '../Buttons/StartBtn';

const Footer = () => {
  return (
    <Wrapper>
      <LinkFooter>Playthem.com</LinkFooter>
      <img src={logoFooter} alt="logo" />
      <StartBtn />
    </Wrapper>
  );
};

export default Footer;

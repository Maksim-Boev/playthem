import React from 'react';
import Wrapper, { Img, LinkFooter } from './style';
// import logoFooter from '../../shared/assets/icons/logo-footer.svg';
import StartBtn from '../Buttons/StartBtn';

const Footer = () => {
  return (
    <Wrapper>
      <LinkFooter>Playthem.com</LinkFooter>
      <Img />
      <StartBtn />
    </Wrapper>
  );
};

export default Footer;

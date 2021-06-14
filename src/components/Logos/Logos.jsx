import React from 'react';

import {
  Img,
  Title,
  StyleIcon,
  Wrapper,
  WrapperIcon
} from './StyledComponents';

import links from '../../shared/constants/links';

const Logos = () => {
  return (
    <Wrapper>
      <Title>Integrate PLAYTHEM with your favorite eCommerce stack</Title>
      <StyleIcon>
        {links.map(({ src, link }, index) => (
          <WrapperIcon href={link} key={index.toString()}>
            <Img src={src} alt="icon" />
          </WrapperIcon>
        ))}
      </StyleIcon>
    </Wrapper>
  );
};

export default Logos;

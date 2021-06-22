import React from 'react';
import StyledStartBtn from './StyledComponent';

const StartBtn = ({ width, background }) => {
  return (
    <StyledStartBtn background={background} w={width}>
      Get Started Now
    </StyledStartBtn>
  );
};

export default StartBtn;

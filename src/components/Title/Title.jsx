import React from 'react';
import Wrapper from './StyledComponent';

const Title = ({ fontWeight, children, upperCase, fontSize }) => {
  return (
    <Wrapper weight={fontWeight} size={fontSize}>
      {upperCase ? children.toUpperCase() : children}
    </Wrapper>
  );
};

export default Title;

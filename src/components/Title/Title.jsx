import React from 'react';
import Wrapper from './StyledComponent';

const Title = ({ fontWeight, children, upperCase, fontSize }) => {
  return (
    <Wrapper weight={fontWeight} size={fontSize} mediaSize="40px">
      {upperCase ? children.toUpperCase() : children}
    </Wrapper>
  );
};

export default Title;

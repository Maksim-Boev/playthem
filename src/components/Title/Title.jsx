import React from 'react';
import Wrapper from './StyledComponent';

const Title = ({ fontWeight, children, upperCase }) => {
  return (
    <Wrapper weight={fontWeight}>
      {upperCase ? children.toUpperCase() : children}
    </Wrapper>
  );
};

export default Title;

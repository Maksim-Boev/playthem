import React from 'react';
import Wrapper from './StyledComponent';

const Title = ({ fontWeight, children }) => {
  return <Wrapper weight={fontWeight}>{children.toUpperCase()}</Wrapper>;
};

export default Title;

import React from 'react';
import { Wrapper } from './StyledComponents';
import Title from '../../Title';
import Description from '../../Description';

const StartText = () => {
  return (
    <Wrapper>
      <Title fontSize="60px">Some start text</Title>
      <Description>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident
      </Description>
    </Wrapper>
  );
};

export default StartText;

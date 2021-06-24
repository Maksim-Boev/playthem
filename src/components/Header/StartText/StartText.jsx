import React from 'react';
import Typed from 'react-typed';
import { Wrapper } from './StyledComponents';
import Title from '../../Title';
import Description from '../../Description';

const StartText = () => {
  return (
    <Wrapper>
      <Title fontSize="60px">
        <Typed
          strings={['Some start text']}
          typeSpeed={150}
          backSpeed={50}
          loop
        />
      </Title>

      <Description>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
        proident.
      </Description>
    </Wrapper>
  );
};

export default StartText;

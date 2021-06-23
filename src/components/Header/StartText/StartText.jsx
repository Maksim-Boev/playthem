import React from 'react';
import Typed from 'react-typed';
import { Wrapper } from './StyledComponents';
import Title from '../../Title';
import Description from '../../Description';

const StartText = () => {
  return (
    <Wrapper>
      <Title fontSize="60px">Some start text</Title>

      <Description>
        <Typed
          strings={[
            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum\n' +
              'dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n' +
              'proident'
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </Description>
    </Wrapper>
  );
};

export default StartText;

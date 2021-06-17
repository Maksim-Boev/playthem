import React from 'react';
import left from '../../shared/assets/img/pricing/left.svg';
import right from '../../shared/assets/img/pricing/right.svg';
import {
  LeftBgTrial,
  RightBgTrial,
  Wrapper,
  Title,
  Description,
  TrialBtn,
  WrappTitle
} from './style';

const GetStarted = ({ marginBottom }) => {
  return (
    <Wrapper mb={marginBottom}>
      <LeftBgTrial src={left} alt="left" />
      <RightBgTrial src={right} alt="right" />
      <WrappTitle>
        <Title>Some start text</Title>
        <Description>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident
        </Description>
      </WrappTitle>
      <TrialBtn>Start a fre trial</TrialBtn>
    </Wrapper>
  );
};

export default GetStarted;

import React from 'react';
import {
  Wrapper,
  Description,
  Img,
  Title,
  Block,
  WrappText,
  WrappTextBlock
} from './style';
import GetStarted from '../../components/GetStarted';

import img from '../../shared/assets/img/platform/img.svg';

const UseCase = () => {
  return (
    <Wrapper>
      <WrappText>
        <Title size="30px" fontWeight={500}>
          PLATHEM Games
        </Title>
        <Description>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident
        </Description>
      </WrappText>
      <Block revers>
        <Img revers src={img} alt="any" />
        <WrappTextBlock>
          <Title size="30px">Some text</Title>
          <Description>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident
          </Description>
        </WrappTextBlock>
      </Block>
      <Block>
        <Img src={img} alt="any" />
        <WrappTextBlock>
          <Title size="30px">Some text</Title>
          <Description>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident
          </Description>
        </WrappTextBlock>
      </Block>
      <GetStarted />
    </Wrapper>
  );
};

export default UseCase;

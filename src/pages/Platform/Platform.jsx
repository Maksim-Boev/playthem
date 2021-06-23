import React from 'react';
import {
  Wrapper,
  StartText,
  Title,
  Description,
  WrappBlock1,
  Img,
  WrappBlock2,
  WrappTextBlock1,
  MaskGroup,
  WrappBlock3,
  Koma,
  Block3,
  Round,
  WrappBlock4,
  Block4,
  ImgBlock4,
  Description2,
  WrappTitle
} from './style';

import img from '../../shared/assets/img/platform/img.svg';
import maskGroup from '../../shared/assets/img/platform/maskGroup1.svg';
import StartBtn from '../../components/Buttons/StartBtn';
import GetStarted from '../../components/GetStarted';

const Platform = () => {
  return (
    <Wrapper>
      <StartText>
        <Title size="30px" fontWeight={500}>
          PLATHEM Games
        </Title>
        <Description>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident
        </Description>
      </StartText>

      <WrappBlock1 revers>
        <Img revers src={img} alt="any" />
        <WrappTextBlock1>
          <Title size="30px">Some text</Title>
          <Description>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident
          </Description>
        </WrappTextBlock1>
      </WrappBlock1>
      <WrappBlock1>
        <Img src={img} alt="any" />
        <WrappTextBlock1>
          <Title size="30px">Some text</Title>
          <Description>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident
          </Description>
        </WrappTextBlock1>
      </WrappBlock1>

      <WrappBlock2>
        <MaskGroup src={maskGroup} alt="maskGroup" />
        <Title size="30px">Some text</Title>
        <Description2>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </Description2>
        <StartBtn />
      </WrappBlock2>
      <WrappBlock3>
        <Block3>
          <Koma>“</Koma>
          <Title size="36px">Some text</Title>
          <Description>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident
          </Description>
        </Block3>
        <Block3>
          <Koma>“</Koma>
          <Title size="36px">Some text</Title>
          <Description>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident
          </Description>
        </Block3>
        <Block3>
          <Koma>“</Koma>
          <Title size="36px">Some text</Title>
          <Description>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident
          </Description>
        </Block3>
      </WrappBlock3>
      <GetStarted marginBottom="70px" />
      <WrappBlock3>
        <Block3>
          <Round />
          <Title size="36px">Some text</Title>
          <Description>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident
          </Description>
        </Block3>
        <Block3>
          <Round />
          <Title size="36px">Some text</Title>
          <Description>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident
          </Description>
        </Block3>
        <Block3>
          <Round />
          <Title size="36px">Some text</Title>
          <Description>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident
          </Description>
        </Block3>
      </WrappBlock3>

      <WrappTitle>
        <Title size="36px">Insights from our blog</Title>
      </WrappTitle>

      <WrappBlock4>
        <Block4>
          <ImgBlock4 src={img} alt="any" />
          <Title size="30px">Some text</Title>
          <Description>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident
          </Description>
        </Block4>
        <Block4>
          <ImgBlock4 src={img} alt="any" />
          <Title size="30px">Some text</Title>
          <Description>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident
          </Description>
        </Block4>
        <Block4>
          <ImgBlock4 src={img} alt="any" />
          <Title size="30px">Some text</Title>
          <Description>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident
          </Description>
        </Block4>
      </WrappBlock4>
    </Wrapper>
  );
};

export default Platform;

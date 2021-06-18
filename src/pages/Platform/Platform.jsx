import React from 'react';
import {
  Wrapper,
  WrappText,
  Title,
  Description,
  WrappBloc1,
  Img,
  WrappBloc2,
  WrappTextBloc1,
  MaskGroup,
  WrappBloc3,
  Koma,
  Bloc3,
  Round,
  WrappBloc4,
  Bloc4,
  ImgBloc4,
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

      <WrappBloc1 revers>
        <Img revers src={img} alt="any" />
        <WrappTextBloc1>
          <Title size="30px">Some text</Title>
          <Description>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident
          </Description>
        </WrappTextBloc1>
      </WrappBloc1>
      <WrappBloc1>
        <Img src={img} alt="any" />
        <WrappTextBloc1>
          <Title size="30px">Some text</Title>
          <Description>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident
          </Description>
        </WrappTextBloc1>
      </WrappBloc1>

      <WrappBloc2>
        <MaskGroup src={maskGroup} alt="maskGroup" />
        <Title size="30px">Some text</Title>
        <Description2>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident
        </Description2>
        <StartBtn />
      </WrappBloc2>
      <WrappBloc3>
        <Bloc3>
          <Koma>’’</Koma>
          <Title size="36px">Some text</Title>
          <Description>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident
          </Description>
        </Bloc3>
        <Bloc3>
          <Koma>’’</Koma>
          <Title size="36px">Some text</Title>
          <Description>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident
          </Description>
        </Bloc3>
        <Bloc3>
          <Koma>’’</Koma>
          <Title size="36px">Some text</Title>
          <Description>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident
          </Description>
        </Bloc3>
      </WrappBloc3>
      <GetStarted marginBottom="70px" />
      <WrappBloc3>
        <Bloc3>
          <Round />
          <Title size="36px">Some text</Title>
          <Description>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident
          </Description>
        </Bloc3>
        <Bloc3>
          <Round />
          <Title size="36px">Some text</Title>
          <Description>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident
          </Description>
        </Bloc3>
        <Bloc3>
          <Round />
          <Title size="36px">Some text</Title>
          <Description>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident
          </Description>
        </Bloc3>
      </WrappBloc3>

      <WrappTitle>
        <Title size="36px">Insights from our blog</Title>
      </WrappTitle>

      <WrappBloc4>
        <Bloc4>
          <ImgBloc4 src={img} alt="any" />
          <Title size="30px">Some text</Title>
          <Description>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident
          </Description>
        </Bloc4>
        <Bloc4>
          <ImgBloc4 src={img} alt="any" />
          <Title size="30px">Some text</Title>
          <Description>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident
          </Description>
        </Bloc4>
        <Bloc4>
          <ImgBloc4 src={img} alt="any" />
          <Title size="30px">Some text</Title>
          <Description>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident
          </Description>
        </Bloc4>
      </WrappBloc4>
    </Wrapper>
  );
};

export default Platform;

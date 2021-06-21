import React from 'react';
import background from '../../shared/assets/img/background.svg';

import { Wrapper, ImgBack } from './StyledComponets';
import StartText from './StartText';
import StartBtn from '../Buttons/StartBtn';
import WatchBtn from '../Buttons/WatchBtn/WatchBtn';
import {
  WrapperStartBlock,
  StartBtnWrapper
} from './StartText/StyledComponents';

const Header = () => {
  return (
    <Wrapper>
      <WrapperStartBlock>
        <StartText />
        <StartBtnWrapper>
          <StartBtn width="50%" />
          <WatchBtn />
        </StartBtnWrapper>
      </WrapperStartBlock>
      <ImgBack src={background} alt="background" />
    </Wrapper>
  );
};

export default Header;

import React from 'react';
import frame from '../../../assets/img/frame.png';
import { Text, Btn, Img } from './StyledComponents';
import { Wrapper } from '../../../StyledComponents';

/* eslint-disable react/prop-types */
const PreviewGame = ({ onActive, onClick }) => {
  return (
    <Wrapper>
      <Img src={frame} alt="frame" />
      <Text>PLAYTHEM Games</Text>
      <Btn onClick={() => onClick()} active={onActive}>
        Preview Games
      </Btn>
    </Wrapper>
  );
};

export default PreviewGame;

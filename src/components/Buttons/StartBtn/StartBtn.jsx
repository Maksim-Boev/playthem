import React from 'react';
import { useTranslation } from 'react-i18next';
import StyledStartBtn from './StyledComponent';

const StartBtn = ({ width, background }) => {
  const { t } = useTranslation();
  return (
    <StyledStartBtn
      background={background}
      w={width}
      href="https://60d9d83432286881ded1800c--nostalgic-edison-c9b8d2.netlify.app/#/login"
    >
      {t('btnGetStarted')}
    </StyledStartBtn>
  );
};

export default StartBtn;

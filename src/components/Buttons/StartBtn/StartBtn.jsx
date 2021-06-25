import React from 'react';
import { useTranslation } from 'react-i18next';
import StyledStartBtn from './StyledComponent';

const StartBtn = ({ width, background }) => {
  const { t } = useTranslation();
  return (
    <StyledStartBtn
      background={background}
      w={width}
      href="https://60d3c5895cb94045fecc2ace--determined-payne-766135.netlify.app/#/login"
    >
      {t('btnGetStarted')}
    </StyledStartBtn>
  );
};

export default StartBtn;

import React from 'react';
import { useTranslation } from 'react-i18next';
import StyledStartBtn from './StyledComponent';

const StartBtn = ({ width, background }) => {
  const { t } = useTranslation();
  return (
    <StyledStartBtn
      background={background}
      w={width}
      href="https://60d9cd184378c2000723a828--suspicious-tesla-f0122f.netlify.app/#/login"
    >
      {t('btnGetStarted')}
    </StyledStartBtn>
  );
};

export default StartBtn;

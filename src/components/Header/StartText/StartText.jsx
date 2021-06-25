import React from 'react';
import Typed from 'react-typed';
import { useTranslation } from 'react-i18next';
import { Wrapper } from './StyledComponents';
import Title from '../../Title';
import Description from '../../Description';

const StartText = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Title fontSize="60px">
        <Typed
          strings={['', t('startTitle')]}
          typeSpeed={150}
          backSpeed={50}
          loop
        />
      </Title>

      <Description>{t('startDescription')}</Description>
    </Wrapper>
  );
};

export default StartText;

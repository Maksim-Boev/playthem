import React from 'react';
import { useTranslation } from 'react-i18next';
import StyledWatchBtn from './StyledComponents';

const WatchBtn = () => {
  const { t } = useTranslation();
  return <StyledWatchBtn>{t('btnWatch')}</StyledWatchBtn>;
};

export default WatchBtn;

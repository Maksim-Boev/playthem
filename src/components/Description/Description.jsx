import React, { useEffect, useState } from 'react';

import i18next from 'i18next';
import Wrapper from './StyledComponent';

const Description = ({ children }) => {
  const [lang, setLang] = useState('');
  useEffect(() => {
    setLang(i18next.language);
  }, [i18next.language]);
  return <Wrapper language={lang}>{children}</Wrapper>;
};

export default Description;

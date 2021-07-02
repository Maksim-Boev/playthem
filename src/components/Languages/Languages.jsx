import React from 'react';
import { useTranslation } from 'react-i18next';

import languages from '../../shared/constants/languages';
import { DropBtn, Dropdown, DropdownContent, LngBtn, Wrapper } from './style';
import flags from '../../shared/constants/flags';

const Languages = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('lng', lng);
  };

  return (
    <Wrapper>
      <Dropdown>
        <DropBtn>{localStorage.getItem('lng').toUpperCase()}</DropBtn>
        <DropdownContent>
          {languages.map((item) => (
            <LngBtn
              key={Object.keys(item)}
              type="button"
              onClick={() => changeLanguage(Object.keys(item))}
            >
              {Object.values(item)}
            </LngBtn>
          ))}
        </DropdownContent>
      </Dropdown>
      {flags[localStorage.getItem('lng')]}
    </Wrapper>
  );
};

export default Languages;

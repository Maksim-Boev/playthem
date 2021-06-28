import React from 'react';

import { useTranslation } from 'react-i18next';
import {
  NavList,
  Wrapper,
  Link,
  LogIn,
  DropBtn,
  Dropdown,
  DropdownContent,
  LngBtn
} from './StyledComponent';
import StartBtn from '../Buttons/StartBtn';
import logo from '../../shared/assets/img/logo.svg';
import { Logo } from '../Header/StyledComponets';
import navLinks from '../../shared/constants/navLinks';
import languages from '../../shared/constants/languages';

const Navbar = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('lng', lng);
  };

  return (
    <Wrapper>
      <Link to="/">
        <Logo src={logo} alt="logo" />
      </Link>

      <NavList>
        {navLinks.map((item) => (
          <Link
            activeClassName="navbar-active"
            key={item.link}
            to={`/${item.link}`}
          >
            {item.title}
          </Link>
        ))}
        <LogIn href="https://60d9cd184378c2000723a828--suspicious-tesla-f0122f.netlify.app/#/login">
          LogIn
        </LogIn>

        <StartBtn />

        <Dropdown>
          <DropBtn>
            {(() => {
              switch (localStorage.getItem('lng')) {
                case 'ru':
                  return 'Russian';
                case 'de':
                  return 'Germany';
                case 'fr':
                  return 'Francais';
                case 'he':
                  return 'Hebrew';
                default:
                  return 'English';
              }
            })()}
          </DropBtn>
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
      </NavList>
    </Wrapper>
  );
};

export default Navbar;

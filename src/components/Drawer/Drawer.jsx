import React, { useState } from 'react';
import {
  MenuList,
  Backdrop,
  MenuToggle,
  MenuListItemStyle,
  Link
} from './StyledComponents';
import navLinks from '../../shared/constants/navLinks';
import Languages from '../Languages';

const Drawer = () => {
  const [toggle, setToggle] = useState(false);

  const link = navLinks.map((item) => {
    return (
      <MenuListItemStyle key={item.title}>
        <Link
          onClick={() => {
            setToggle(!toggle);
          }}
          activeClassName="navbar-active"
          to={`/${item.link}`}
        >
          {item.title}
        </Link>
      </MenuListItemStyle>
    );
  });

  return (
    <>
      <div>
        <MenuToggle
          open={toggle}
          onClick={() => setToggle(!toggle)}
          className={toggle ? 'fa fa-times' : 'fa fa-bars'}
        />
        <MenuList open={toggle}>
          {link}
          <Languages />
        </MenuList>
      </div>
      {toggle && <Backdrop onClick={() => setToggle(!toggle)} />}
    </>
  );
};

export default Drawer;

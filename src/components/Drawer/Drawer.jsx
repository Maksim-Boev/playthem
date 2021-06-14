import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  MenuList,
  Backdrop,
  MenuToggle,
  MenuListItemStyle
} from './StyledComponents';

const Drawer = () => {
  const menuList = [
    'Our Games',
    'Platform',
    'Use Case',
    'Pricing',
    'Blog',
    'Log In'
  ];
  const [menuNumber, setMenuNumber] = useState(false);
  const [toggle, setToggle] = useState(false);

  const link = menuList.map((item) => {
    return (
      <NavLink key={item} to={`/${item}`}>
        <MenuListItemStyle
          key={item.toString()}
          ticketMarker={menuNumber === item}
          onClick={() => {
            setToggle(!toggle);
            setMenuNumber(item);
          }}
        >
          {item}
        </MenuListItemStyle>
      </NavLink>
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

        <MenuList open={toggle}>{link}</MenuList>
      </div>
      {toggle && <Backdrop onClick={() => setToggle(!toggle)} />}
    </>
  );
};

export default Drawer;

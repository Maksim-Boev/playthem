import React, { useState } from 'react';
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

  const link = menuList.map((index) => {
    return (
      <MenuListItemStyle
        key={index.toString()}
        ticketMarker={menuNumber === index}
        onClick={() => {
          setToggle(!toggle);
          setMenuNumber(index);
        }}
      >
        {index}
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
        <MenuList open={toggle}>{link}</MenuList>
      </div>
      {toggle && <Backdrop onClick={() => setToggle(!toggle)} />}
    </>
  );
};

export default Drawer;

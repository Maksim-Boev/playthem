import React, { useState } from 'react';
import {
  MenuList,
  Backdrop,
  MenuToggle,
  MenuListItemStyle,
  Link
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

  const [toggle, setToggle] = useState(false);

  const link = menuList.map((item) => {
    return (
      <MenuListItemStyle key={item.toString()}>
        <Link
          onClick={() => {
            setToggle(!toggle);
          }}
          activeClassName="navbar-active"
          to={`/${item}`}
        >
          {item}
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

        <MenuList open={toggle}>{link}</MenuList>
      </div>
      {toggle && <Backdrop onClick={() => setToggle(!toggle)} />}
    </>
  );
};

export default Drawer;

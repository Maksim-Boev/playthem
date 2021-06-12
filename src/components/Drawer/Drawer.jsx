import React, { useState } from 'react';
import {
  TicketList,
  Backdrop,
  MenuToggle,
  TicketLiStyle
} from './StyledComponents';

const Drawer = () => {
  const ticketList = [
    'Our Games',
    'Platform',
    'Use Case',
    'Pricing',
    'Blog',
    'Log In'
  ];
  const [ticketNumber, setTicketNumber] = useState(false);
  const [toggle, setToggle] = useState(false);

  const link = ticketList.map((index) => {
    return (
      <TicketLiStyle
        key={index.toString()}
        ticketMarker={ticketNumber === index}
        onClick={() => {
          setToggle(!toggle);
          setTicketNumber(index);
        }}
      >
        {index}
      </TicketLiStyle>
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
        <TicketList open={toggle}>{link}</TicketList>
      </div>
      {toggle && <Backdrop onClick={() => setToggle(!toggle)} />}
    </>
  );
};

export default Drawer;

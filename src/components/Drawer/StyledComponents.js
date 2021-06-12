import styled from 'styled-components';

export const TicketList = styled.ul`
  padding: 0;
  margin: 0;
  ${({ open }) => {
    return open ? 'left: 0' : 'left: -300px';
  }};
  transition: left 0.22s ease-in;
  position: fixed;
  background-color: #fff;
  height: 100%;
  width: 300px;
  z-index: 1;
`;

export const Backdrop = styled.div`
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  width: 100%;
  height: 100vh;
  left: 0;
`;

export const MenuToggle = styled.i`
  margin-top: 20px;
  position: fixed;
  ${({ open }) => {
    return open ? 'left: 320px' : 'left: 40px';
  }};
  font-size: 20px;
  cursor: pointer;
  color: #000;
  transition: opacity, left 0.22s ease-in;
  z-index: 100;
  :hover {
    opacity: 0.7;
  }
`;

export const TicketLiStyle = styled.li`
  list-style: none;
  margin-top: 10px;
  margin-left: 20px;
  cursor: pointer;
  ${({ ticketMarker }) => {
    return ticketMarker ? 'color: red' : 'color: black';
  }}
`;

import styled from 'styled-components';

export const TicketList = styled.ul`
  padding: 0;
  margin: 0;
  ${({ open }) => {
    return open ? 'right: 0' : 'right: -300px';
  }};
  transition: right 0.22s ease-in;
  position: fixed;
  background-color: #fff;
  height: 100%;
  width: 300px;
  z-index: 3;
`;

export const Backdrop = styled.div`
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  width: 100%;
  height: 100vh;
  left: 0;
  z-index: 2;
`;

export const MenuToggle = styled.i`
  margin-top: 20px;
  position: fixed;
  ${({ open }) => {
    return open ? 'right: 320px' : 'right: 7%';
  }};
  font-size: 30px;
  cursor: pointer;
  color: #000;
  transition: opacity, right 0.22s ease-in;
  z-index: 100;
  :hover {
    opacity: 0.7;
  }
  @media (min-width: 769px) {
    display: none;
  }
`;

export const TicketLiStyle = styled.li`
  list-style: none;
  font-family: 'Montserrat', sans-serif;
  font-size: 40px;
  margin-top: 10px;
  margin-left: 20px;
  cursor: pointer;
  ${({ ticketMarker }) => {
    return ticketMarker ? 'color: #34afe7' : 'color: black';
  }}
`;

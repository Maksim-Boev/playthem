import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  position: absolute;
  width: 72%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 14%;
  z-index: 1;
  @media (max-width: 1024px) {
    padding: 0 0 0 10%;
    width: auto;
  }
  @media (max-width: 768px) {
    padding: 0 7%;
  }
`;

export const NavList = styled.ul`
  @media (max-width: 825px) {
    display: none;
  }
  display: flex;
  height: 40px;
  justify-content: space-between;
  align-items: center;
  width: 600px;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  list-style: none;
  white-space: nowrap;
  color: #474747;
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
  &:hover {
    cursor: pointer;
  }
`;

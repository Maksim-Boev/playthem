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

export const LogIn = styled.a`
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

export const DropdownContent = styled.div`
  display: none;
  position: absolute;
  left: 0;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

export const Dropdown = styled.div`
  display: inline-block;
  position: relative;
  float: left;
  :hover ${DropdownContent} {
    display: block;
  }
`;

export const DropBtn = styled.button`
  font-family: 'Montserrat', sans-serif;
  background: linear-gradient(180deg, #32b1e8 0%, #4898dd 100%);
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.24);
  border-radius: 2px;
  color: #fff;
  padding: 10px;
  font-size: 15px;
  border: none;
  cursor: pointer;
`;

export const LngBtn = styled.button`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  border: none;
  display: block;
`;

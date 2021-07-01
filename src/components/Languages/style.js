import styled from 'styled-components';

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
  margin-left: 2%;
  display: inline-block;
  position: relative;
  float: left;
`;

export const DropBtn = styled.button`
  font-family: 'Montserrat', sans-serif;
  border-radius: 2px;
  background-color: transparent;
  padding: 10px;
  font-size: 15px;
  border: none;
  cursor: pointer;
`;

export const LngBtn = styled.button`
  width: 100%;
  color: black;
  padding: 12px 0;
  text-decoration: none;
  border: none;
  display: block;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  :hover ${DropdownContent} {
    display: block;
  }
`;

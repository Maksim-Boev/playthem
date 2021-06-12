import styled from 'styled-components';

const StyledStartBtn = styled.button`
  font-family: 'Montserrat', sans-serif;
  width: ${({ w }) => w || 'auto'};
  white-space: nowrap;
  font-size: 15px;
  padding: 10px;
  height: 40px;
  color: #ffffff;
  border: none;
  border-radius: 2px;
  background: linear-gradient(180deg, #32b1e8 0%, #4898dd 100%);
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.24);
  :hover {
    cursor: pointer;
  }
`;

export default StyledStartBtn;

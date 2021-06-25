import styled from 'styled-components';

const StyledStartBtn = styled.a`
  font-family: 'Montserrat', sans-serif;
  width: ${({ w }) => w || 'auto'};
  white-space: nowrap;
  transition-duration: 0.5s;
  backdrop-filter: brightness(2.5);
  text-align: center;
  text-decoration: none;
  font-size: 15px;
  padding: 10px;
  border-radius: 2px;
  color: #fff;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.24);
  background: linear-gradient(180deg, #32b1e8 0%, #4898dd 100%);

  :hover {
    cursor: pointer;
  }

  @media (max-width: 320px) {
    font-size: 13px;
  }
`;

export default StyledStartBtn;

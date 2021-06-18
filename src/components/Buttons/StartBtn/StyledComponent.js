import styled from 'styled-components';

const StyledStartBtn = styled.div`
  font-family: 'Montserrat', sans-serif;
  width: ${({ w }) => w || 'auto'};
  white-space: nowrap;
  transition-duration: 0.5s;
  backdrop-filter: brightness(2.5);
  text-align: center;
  font-size: 15px;
  padding: 10px;
  color: #34afe7;
  border-radius: 2px;
  border: 1px solid #34afe7;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.24);
  ${({ background }) => {
    return background
      ? 'background: linear-gradient(180deg, #32b1e8 0%, #4898dd 100%); color: #fff;'
      : '';
  }}
  :hover {
    cursor: pointer;
    background: linear-gradient(180deg, #32b1e8 0%, #4898dd 100%);
    color: #fff;
  }
`;

export default StyledStartBtn;

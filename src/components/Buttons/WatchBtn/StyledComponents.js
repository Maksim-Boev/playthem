import styled from 'styled-components';

const Btn = styled.div`
  font-family: 'Montserrat', sans-serif;
  color: #34afe7;
  white-space: nowrap;
  backdrop-filter: brightness(2.5);
  transition-duration: 0.5s;
  border: 1px solid;
  border-color: #34afe7;
  border-radius: 2px;
  padding: 10px;
  margin-left: 30px;
  width: 50%;
  text-align: center;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.24);
  :hover {
    cursor: pointer;
    background: linear-gradient(180deg, #32b1e8 0%, #4898dd 100%);
    color: #fff;
  }
`;

export default Btn;

import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 10vw;
  min-height: 120px;
  align-items: center;
  justify-content: space-evenly;
`;

export const LinkFooter = styled.div`
  min-width: 144px;
  color: #37abe6;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-size: 16px;
  @media (max-width: 426px) {
    min-width: auto;
  }
`;

export default Wrapper;

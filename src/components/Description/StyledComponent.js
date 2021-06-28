import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  color: #474747;
  text-align: ${({ language }) => (language === 'he' ? 'right' : 'left')};
  @media (min-width: 475px) {
    height: 57px;
  }
  @media (max-width: 425px) {
    height: 76px;
  }
`;

export default Wrapper;

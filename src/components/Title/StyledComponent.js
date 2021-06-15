import styled from 'styled-components';

const Wrapper = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  color: #474747;
  font-weight: ${({ weight }) => weight || 300};
  font-size: ${({ size }) => size};
  @media (max-width: 470px) {
    font-size: 40px;
  }
`;

export default Wrapper;

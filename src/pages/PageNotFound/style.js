import styled from 'styled-components';

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 80vh;
  align-items: center;
  justify-content: center;
  font-family: 'Montserrat', sans-serif;
  font-size: 60px;
  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

export default Content;

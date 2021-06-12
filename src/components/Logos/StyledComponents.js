import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 70px;
`;

const Img = styled.img`
  height: 90px;
  margin: 20px 40px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export { Wrapper, Img };

import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 8%;

  background: #f8f8f8;
`;

const Logo = styled.img`
  margin: 30px 0;
`;

const ImgBack = styled.img`
  @media (max-width: 768px) {
    display: none;
  }
  top: 0;
  right: 0;
  position: absolute;
  max-width: 800px;
`;

export { Wrapper, Logo, ImgBack };

import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 13%;
  background: #f8f8f8;
  @media (min-width: 1024px) {
    padding-bottom: 250px;
  }
`;

const Logo = styled.img`
  margin: 30px 0;
  @media (max-width: 825px) {
    max-width: 150px;
    margin: 15px 0;
  }
`;

const ImgBack = styled.img`
  @media (max-width: 768px) {
    max-width: 400px;
  }
  top: 0;
  right: 0;
  position: absolute;
  max-width: 800px;
`;

export { Wrapper, Logo, ImgBack };

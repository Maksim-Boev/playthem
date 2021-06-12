import styled from 'styled-components';

const Title = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  color: #474747;
  font-weight: 300;
  font-size: 60px;
  @media (max-width: 470px) {
    font-size: 40px;
  }
`;
const Description = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  color: #474747;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: justify;
  margin: 230px 0 30px;
  max-width: 460px;
  z-index: 1;
  @media (max-width: 320px) {
    margin: 150px 0 30px;
  } ;
`;

export const WrapperStartBlock = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  padding-left: 15%;
  @media (max-width: 768px) {
    padding: 0 7%;
    align-items: center;
  } ;
`;
export const StartBtnWrapper = styled.div`
  max-width: 460px;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  z-index: 1;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export { Title, Description, Wrapper };

import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: justify;
  margin: 270px 0 30px;
  max-width: 460px;
  z-index: 1;
  @media (max-width: 768px) {
    margin: 310px 0 30px;
  }
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

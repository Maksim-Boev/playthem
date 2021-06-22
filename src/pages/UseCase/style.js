import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 220px;
`;

export const WrappText = styled.div`
  display: flex;
  max-width: 700px;
  padding: 0 5%;
  text-align: center;
  height: 120px;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 470px) {
    height: 100px;
  }
`;

export const Title = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  white-space: nowrap;
  color: #474747;
  font-weight: 500;
  font-size: ${({ size }) => size};
  @media (max-width: 470px) {
    font-size: 17px;
  }
`;

export const Description = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: normal;
  margin: 5% 0;
  font-size: 16px;
  color: #474747;
  @media (max-width: 470px) {
    font-size: 14px;
  }
`;

export const Bloc = styled.div`
  display: flex;
  width: 70%;
  align-items: center;
  margin-top: 5%;
  flex-flow: ${({ revers }) => {
    return revers ? 'row-reverse' : 'row';
  }};
  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

export const Img = styled.img`
  width: 50%;
  ${({ revers }) => {
    return revers ? 'margin-left: 5%' : 'margin-right: 5%';
  }};
  @media (max-width: 425px) {
    width: 90%;
    margin: 0;
  }
`;

export const WrappTextBloc = styled.div`
  width: 50%;
  @media (max-width: 425px) {
    width: 90%;
    margin-top: 5%;
  }
`;

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
    margin: 3% 0;
  }
`;

export const Description2 = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: normal;
  margin: 5% 0;
  font-size: 16px;
  color: #474747;
  @media (max-width: 470px) {
    font-size: 14px;
    margin: 0;
  }
`;

export const WrappBloc1 = styled.div`
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

export const WrappBloc2 = styled.div`
  display: flex;
  padding: 0 5%;
  margin-top: 5%;
  height: 29.2vw;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
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

export const WrappTextBloc1 = styled.div`
  width: 50%;
  @media (max-width: 425px) {
    width: 90%;
    margin-top: 5%;
  }
`;

export const MaskGroup = styled.img`
  background-color: #edf7ff;
  position: absolute;
  width: 100%;
  right: 0;
  z-index: -1;
`;

export const WrappBloc3 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding-top: 5%;
  @media (max-width: 1024px) {
    height: 35vw;
  }
  @media (max-width: 425px) {
    flex-direction: column;
    height: 140vw;
  }
`;

export const Koma = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-size: 144px;
  line-height: 0;
  color: #33b0e7;
`;

export const Bloc3 = styled.div`
  width: 18%;
  @media (max-width: 1024px) {
    width: 30%;
  }
  @media (max-width: 425px) {
    width: 90%;
    margin-top: 40px;
  }
`;

export const Round = styled.div`
  width: 70px;
  height: 70px;
  margin-bottom: 5%;
  border-radius: 50px;
  background: linear-gradient(
    155.62deg,
    #ff55e1 -50.61%,
    #9b3db4 78.87%,
    #fd9946 224.06%
  );
`;

export const WrappBloc4 = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 5%;
  @media (max-width: 425px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Bloc4 = styled.div`
  width: 18%;
  @media (max-width: 1024px) {
    width: 30%;
  }
  @media (max-width: 425px) {
    width: 90%;
    margin-top: 40px;
  }
`;

export const ImgBloc4 = styled.img`
  width: 100%;
  margin-bottom: 5%;
`;

export const WrappTitle = styled.div`
  margin-top: 5%;
  @media (max-width: 425px) {
    margin-top: 35%;
  }
`;

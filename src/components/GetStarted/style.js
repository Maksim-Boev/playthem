import styled from 'styled-components';

export const LeftBgTrial = styled.img`
  position: absolute;
  max-width: 50%;
  left: 0;
`;
export const RightBgTrial = styled.img`
  position: absolute;
  max-width: 50%;
  right: 0;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25vw;
  max-height: 300px;
  background: #6a4fe4;
  width: 100%;
  margin-top: 5%;
  margin-bottom: ${({ mb }) => mb || '0px'};
`;

export const Title = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  color: #fff;
  font-weight: 500;
  font-size: 30px;
  @media (max-width: 425px) {
    font-size: 10px;
  }
`;

export const Description = styled.div`
  padding-top: 2%;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  color: #fff;
  @media (max-width: 425px) {
    font-size: 6px;
  }
`;

export const TrialBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  width: 10%;
  min-width: 130px;
  height: 42px;
  font-family: 'Montserrat', sans-serif;
  margin-left: 15%;
  border: 2px solid #ffffff;
  border-radius: 2px;
  color: #fff;
  background-color: #6a4fe4;
  z-index: 1;
  :hover {
    cursor: pointer;
  }
  @media (max-width: 426px) {
    margin-left: 5%;
    font-size: 10px;
    height: 24px;
  }
`;

export const WrappTitle = styled.div`
  width: 32%;
  z-index: 1;
`;

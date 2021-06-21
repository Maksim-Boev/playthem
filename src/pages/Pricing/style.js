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
  color: #474747;
  font-weight: 500;
  font-size: 30px;
  @media (max-width: 470px) {
    font-size: 17px;
  }
`;

export const Description = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  color: #474747;
  @media (max-width: 470px) {
    font-size: 14px;
    margin-top: 2%;
  }
`;

export const WrappPremiumCards = styled.div`
  display: flex;
  width: 60%;
  min-width: 750px;
  margin-top: 5%;
  justify-content: space-evenly;
  @media (max-width: 825px) {
    flex-direction: column;
    align-items: center;
    margin-top: 15%;
    min-width: 100%;
  }
`;

export const Img = styled.img`
  position: absolute;
  min-width: 920px;
  z-index: -1;
  width: 70%;
  top: 50px;
  @media (max-width: 825px) {
    display: none;
  }
`;

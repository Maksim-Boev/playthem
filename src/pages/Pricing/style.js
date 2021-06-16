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
  text-align: center;
  height: 120px;
  flex-direction: column;
  justify-content: space-between;
`;

export const WrappPremiumCards = styled.div`
  display: flex;
  min-width: 750px;
  margin-top: 5%;
  justify-content: space-between;
`;

export const Img = styled.img`
  position: absolute;
  z-index: -1;
  width: 70%;
  top: 50px;
`;

import styled from 'styled-components';

export const StyleIcon = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  margin-top: 70px;
`;

export const Img = styled.img`
  max-width: 200px;
  height: 90px;
  margin: 20px 40px;
  @media (max-width: 1150px) {
    height: auto;
    width: 75%;
    margin: 20px 0;
  }
`;

export const Title = styled.div`
  margin: 130px 0 0;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85%;
`;

export const WrapperIcon = styled.a`
  text-align: center;
`;

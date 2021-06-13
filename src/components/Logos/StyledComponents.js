import styled from 'styled-components';

export const StyleIcon = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  margin-top: 70px;

  @media (max-width: 1150px) {
    grid-template-columns: repeat(2, auto);
    margin-top: 20px;
  }
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
  margin-top: 130px;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  @media (max-width: 768px) {
    margin-top: 60px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 85%;
`;

export const WrapperIcon = styled.a`
  text-align: center;
`;

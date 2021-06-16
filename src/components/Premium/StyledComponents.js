import styled from 'styled-components';
import { Text, Svg } from '../CheckMarkIcon/style';

export const Price = styled.div`
  display: flex;
  align-items: baseline;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  color: #474747;
  font-size: 96px;
  font-weight: 100;
`;

export const Month = styled.div`
  display: flex;
  align-items: baseline;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  color: #474747;
  font-size: 40px;
  font-weight: 100;
`;

export const Title = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  color: #474747;
  font-weight: 100;
  font-size: 36px;
`;

export const SelectPlantBtn = styled.button`
  font-family: 'Montserrat', sans-serif;
  white-space: nowrap;
  font-size: 15px;
  padding: 0 30px;
  margin-top: 20px;
  height: 40px;
  color: #ffffff;
  text-align: center;
  border: none;
  border-radius: 2px;
  background: linear-gradient(180deg, #32b1e8 0%, #4898dd 100%);
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.24);

  :hover {
    cursor: pointer;
  }
`;

export const Wrapper = styled.div`
  max-width: 550px;
  padding: 5%;
  cursor: default;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #fff;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  :hover {
    background: #6a4fe4;
  }
  :hover ${Price} {
    color: #fff;
  }
  :hover ${Month} {
    color: #fff;
  }
  :hover ${Title} {
    color: #fff;
  }
  :hover ${SelectPlantBtn} {
    background: #6a4fe4;
    border: 1px solid #fff;
  }
  :hover ${Text} {
    color: #fff;
  }
  :hover ${Svg} {
    fill: #fff;
  }
`;

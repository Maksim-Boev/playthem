import styled from 'styled-components';

const col = '#fff';

export const Wrapper = styled.div`
  max-width: 550px;
  padding: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #fff;
  border-radius: 10px;
  background: ${col};
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  :hover {
    background: #6a4fe4;
  }
`;

export const Price = styled.div`
  display: flex;
  align-items: baseline;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  color: ${({ color }) => {
    return color === 'true' ? '#fff' : '#474747';
  }};
  font-size: 96px;
  font-weight: 100;
`;

export const Month = styled.div`
  display: flex;
  align-items: baseline;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  color: ${({ color }) => {
    return color === 'true' ? '#fff' : '#474747';
  }};
  font-size: 40px;
  font-weight: 100;
`;

export const Title = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  color: ${({ color }) => {
    return color === 'true' ? '#fff' : '#474747';
  }};
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
  border: ${({ outlined }) => {
    return outlined === 'true' ? '1px solid #fff' : 'none';
  }};
  border-radius: 2px;
  background: ${({ outlined }) => {
    return outlined === 'true'
      ? '#6A4FE4'
      : 'linear-gradient(180deg, #32b1e8 0%, #4898dd 100%)';
  }};
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.24);

  :hover {
    cursor: pointer;
  }
`;

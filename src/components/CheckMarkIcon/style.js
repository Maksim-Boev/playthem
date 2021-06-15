import styled from 'styled-components';

export const SVG = styled.svg`
  line {
    stroke: black;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Text = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  color: ${({ color }) => {
    return color ? '#fff' : '#474747';
  }};
  padding-left: 25px;
`;

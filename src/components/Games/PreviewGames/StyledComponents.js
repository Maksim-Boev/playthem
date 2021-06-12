import styled from 'styled-components';

const Text = styled.div`
  text-align: center;
  padding: 30px 0;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
`;

const Btn = styled.div`
  ${({ active }) => {
    return active
      ? 'background: linear-gradient(180deg, #32b1e8 0%, #4898dd 100%); color: #ffffff;'
      : '';
  }};
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
  padding: 10px;
  border: none;
  border-radius: 2px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.24);
  :hover {
    cursor: pointer;
  }
`;

const Wrapper = styled.div`
  display: flex;
`;

export const SecondDescription = styled.div`
  max-width: 700px;
  padding: 30px 0;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
`;

export const SecondTitle = styled.div`
  margin: 130px 0 0;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
`;

export const Img = styled.img`
  width: 100%;
`;

export { Text, Btn, Wrapper };

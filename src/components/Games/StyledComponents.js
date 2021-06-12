import styled from 'styled-components';

const Text = styled.div`
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
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
  :hover {
    cursor: pointer;
  }
`;

const Wrapper = styled.div`
  display: flex;
`;

export { Text, Btn, Wrapper };

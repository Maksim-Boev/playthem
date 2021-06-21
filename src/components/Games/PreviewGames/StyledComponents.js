import styled from 'styled-components';

export const Text = styled.div`
  text-align: center;
  padding: 20px 0 10px;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
`;

export const Btn = styled.div`
  ${({ active }) => {
    return active
      ? 'background: linear-gradient(180deg, #32b1e8 0%, #4898dd 100%); color: #ffffff;'
      : '';
  }};
  font-family: 'Montserrat', sans-serif;
  transition-duration: 0.3s;
  font-size: 15px;
  padding: 10px;
  border: none;
  border-radius: 2px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.24);
  :hover {
    cursor: pointer;
    background: linear-gradient(180deg, #32b1e8 0%, #4898dd 100%);
    color: #ffffff;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
`;

export const Description = styled.div`
  max-width: 700px;
  padding: 30px 0;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  @media (max-width: 768px) {
    padding: 3%;
    font-size: 14px;
  }
`;

export const Title = styled.div`
  margin-top: 130px;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  @media (max-width: 768px) {
    margin-top: 60px;
    font-size: 17px;
  }
`;

export const Img = styled.img`
  width: 100%;
`;

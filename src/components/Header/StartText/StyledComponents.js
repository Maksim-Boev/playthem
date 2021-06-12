import styled from 'styled-components';

const Title = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: normal;
  color: #474747;
  font-weight: 300;
  font-size: 60px;
`;
const Description = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  color: #474747;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: justify;
  margin: 230px 0 30px;
  max-width: 460px;
  z-index: 1;
`;

export { Title, Description, Wrapper };

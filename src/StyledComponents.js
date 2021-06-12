import styled from 'styled-components';

const FirstScreen = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  background: #f8f8f8;
  width: 100%;
  padding-bottom: 8%;
  box-sizing: border-box;
`;

const SecondScreen = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  padding-bottom: 150px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SecondDescription = styled.div`
  max-width: 700px;
  padding: 30px 0;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
`;

export { FirstScreen, Wrapper, SecondDescription, SecondScreen };

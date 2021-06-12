import styled from 'styled-components';

const FirstScreen = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  background: #f8f8f8;
  width: 100%;
  //padding: 0 0 270px 390px;
  padding-bottom: 8%;
  box-sizing: border-box;
`;

const WrapperStartBlock = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  padding-left: 15%;
`;

const SecondScreen = styled.div`
  display: flex;
  //width: 1920px;
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

const StartBtnWrapper = styled.div`
  max-width: 460px;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  z-index: 1;
`;

const SecondTitle = styled.div`
  margin: 130px 0 0;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
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

const StylePreviewGames = styled.div`
  display: flex;
  width: 1150px;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 100px;
`;

export {
  FirstScreen,
  Wrapper,
  StartBtnWrapper,
  SecondTitle,
  SecondDescription,
  StylePreviewGames,
  SecondScreen,
  WrapperStartBlock
};

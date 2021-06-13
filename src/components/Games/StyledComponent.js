import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
`;

export const StylePreviewGames = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
  padding-top: 100px;
  @media (max-width: 570px) {
    flex-wrap: wrap;
    padding-top: 20px;
  }
`;

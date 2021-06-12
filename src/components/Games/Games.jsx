import React, { useState } from 'react';
import {
  SecondDescription,
  SecondTitle
} from './PreviewGames/StyledComponents';

import PreviewGame from './PreviewGames';
import { StylePreviewGames, Wrapper } from './StyledComponent';

const Games = () => {
  const [isActive, setIsActive] = useState(null);

  const handler = (index) => {
    setIsActive(index);
  };

  const games = ['one', 'two', 'three', 'four'];

  return (
    <Wrapper>
      <SecondTitle>PLAYTHEM Games</SecondTitle>
      <SecondDescription>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident
      </SecondDescription>

      <StylePreviewGames>
        {games.map((value, index) => (
          <PreviewGame
            key={index.toString()}
            onActive={index === isActive}
            onClick={() => handler(index)}
          />
        ))}
      </StylePreviewGames>
    </Wrapper>
  );
};

export default Games;

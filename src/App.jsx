import React, { useState } from 'react';
import {
  StylePreviewGames,
  SecondDescription,
  SecondScreen,
  SecondTitle
} from './StyledComponents';
import Header from './components/Header/Header';

import Shops from './components/Logos';
import PreviewGame from './components/Games';

const App = () => {
  const [isActive, setIsActive] = useState(null);
  const games = ['one', 'two', 'three', 'four'];
  const handler = (index) => {
    setIsActive(index);
  };

  return (
    <>
      <Header />
      <SecondScreen>
        <SecondTitle>
          Integrate PLAYTHEM with your favorite eCommerce stack
        </SecondTitle>
        <Shops />
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
      </SecondScreen>
    </>
  );
};

export default App;

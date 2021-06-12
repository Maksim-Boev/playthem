import React from 'react';
import { SecondScreen } from './StyledComponents';
import Header from './components/Header/Header';

import Logos from './components/Logos';
import Games from './components/Games';

const App = () => {
  return (
    <>
      <Header />
      <SecondScreen>
        <Logos />
        <Games />
      </SecondScreen>
    </>
  );
};

export default App;

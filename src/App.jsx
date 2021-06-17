import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Main from './pages/Main/Main';
import Pricing from './pages/Pricing/Pricing';
import Navbar from './components/Header/Navbar';
import Drawer from './components/Drawer';
import { AppWrapper } from './StyledComponents';
import Platform from './pages/Platform';

const App = () => {
  return (
    <AppWrapper>
      <Navbar />
      <Drawer />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/Our Games" component={Main} />
        <Route exact path="/Platform" component={Platform} />
        <Route exact path="/Use Case" component={Main} />
        <Route exact path="/Pricing" component={Pricing} />
        <Route exact path="/Blog" component={Main} />
        <Route exact path="/Log In" component={Main} />
        <Route render={() => <h2>Page not found</h2>} />
      </Switch>
    </AppWrapper>
  );
};

export default App;

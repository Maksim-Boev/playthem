import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import Main from './pages/Main';
import Pricing from './pages/Pricing';
import Navbar from './components/Header/Navbar';
import Drawer from './components/Drawer';

const App = () => {
  return (
    <>
      <Navbar />
      <Drawer />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/Pricing" component={Pricing} />
        <Route render={() => <h2>Page not found</h2>} />
      </Switch>
    </>
  );
};

export default withRouter(App);

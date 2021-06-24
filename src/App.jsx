import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Main from './pages/Main/Main';
import Pricing from './pages/Pricing/Pricing';
import Navbar from './components/Navbar';
import Drawer from './components/Drawer';
import { AppWrapper } from './StyledComponents';
import Platform from './pages/Platform';
import UseCase from './pages/UseCase';
import Footer from './components/Footer';
import PageNotFound from './pages/PageNotFound';

const App = () => {
  return (
    <AppWrapper>
      <Navbar />
      <Drawer />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/our-games" component={Main} />
        <Route exact path="/platform" component={Platform} />
        <Route exact path="/use-case" component={UseCase} />
        <Route exact path="/pricing" component={Pricing} />
        <Route exact path="/blog" component={Main} />
        <Route exact path="/log-in" component={Main} />
        <Route component={PageNotFound} />
      </Switch>
      <Footer />
    </AppWrapper>
  );
};

export default App;

import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Services from '../pages/services/Services'
import Contact from '../pages/contact/Contact'
import NotFound from '../pages/NotFound/NotFound';

class Routes extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <Switch>
          <Route path="/contato" component={Contact} />
          <Route path="/serviços" component={Services} />
          <Route path="/sobre" component={About} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </HashRouter>
    );
  }
}

export default Routes;

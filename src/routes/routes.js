import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Services from '../pages/services/Services'
import Contact from '../pages/contact/Contact'
import NotFound from '../pages/NotFound/NotFound';

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/contato" component={Contact} />
          <Route path="/serviços" component={Services} />
          <Route path="/sobre" component={About} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;

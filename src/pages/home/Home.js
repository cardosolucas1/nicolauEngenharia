import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Apresentation from '../../components/Introduction/Apresentation'
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <section className="background-yellow">
          <Header />
          <Apresentation />
        </section>
      </div>
    );
  }
}

export default Home;

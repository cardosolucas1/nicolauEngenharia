import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Apresentation from '../../components/Introduction/Apresentation';
import Informations from '../../components/Informations/Informations';
import Footer from '../../components/Footer/Footer'
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <section className="background-yellow">
          <Header />
          <Apresentation />
        </section>
        <div className="background-yellow">
          <Informations />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;

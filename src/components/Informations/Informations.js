import React, { Component } from 'react';
// import './Informations.css';

class Informations extends Component {
  render() {
    return (
      <section className="infoBar">
        <div className="title-section">
          <span>SOLICITE UMA VISITA TÉCNICA</span>
        </div>
        <aside className="infoContactBar">
          <div>
            <span className="contact-title">NOSSAS LOJAS</span>
            <p className="infoContact">Rua Qualquer, 123, Qualquer Cidade, Estado, País</p>
          </div>
          <div>
            <span className="contact-title">E-MAIL</span>
            <p className="infoContact">alo@sitebacana.com.br</p>
          </div>
          <div>
            <span className="contact-title">TELEFONE</span>
            <p className="infoContact">(12) 3456 -7890</p>
          </div>

        </aside>
      </section>
    );
  }
}

export default Informations;

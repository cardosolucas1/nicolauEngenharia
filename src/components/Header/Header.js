import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import './Menu.css';
// import './BtnMenu.css';
// import './Reset.css';
import './Header.css';

class Header extends Component {
  openMenu() {
    const menuBar = document.querySelector('.menu');
    menuBar.className = 'menu menu_open';
  }

  closeMenu() {
    const menuBar = document.querySelector('.menu');
    menuBar.className = 'menu';
  }

  renderNavBar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <img src={require('../../images/logo.png')} width="60px"/>
        <button
          className="navbar-toggler"
          type="button" data-toggle="collapse" data-target="#textoNavbar"
          aria-controls="textoNavbar" aria-expanded="false" aria-label="Alterna navegação"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="textoNavbar">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" href="#">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">Sobre nós</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">Projetos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">Serviços</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">Links úteis</Link>
            </li>
          </ul>
          <span className="navbar-text">
            Projetos sustentáveis e responsivos
          </span>
        </div>
      </nav>
    );
  }
  render() {
    return (
      <header className="shadow-sm bg-white rounded">
        {this.renderNavBar()}
      </header>
    );
  }
}

export default Header;

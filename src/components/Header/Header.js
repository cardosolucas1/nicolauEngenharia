import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import './BtnMenu.css';
import './Reset.css';
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

  render() {
    return (
      <header className="heading">
          <nav className="Wrap-Menu">
            <div
              onClick={this.openMenu}
              className="btnMenu btnMenu_open">
              Menu
            </div>
            <ul className="menu">
              <li onClick={this.closeMenu}className="btnMenu btnMenu_close">Sair</li>
              <li className="menu-item">
                <Link className="menu-item-action" to="/sobre">Sobre nós</Link>
              </li>
              <li className="menu-item">
                <Link className="menu-item-action" to="serviços">Serviços</Link>
              </li>
              <li className="menu-item">
                <Link className="menu-item-action" to="/contato">Contato</Link>
              </li>
            </ul>
          </nav>
      </header>
    );
  }
}

export default Header;

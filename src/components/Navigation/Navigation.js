import React from 'react';
import './navigation.scss';
import Logo from '../../assets/logo.svg';
import Symbol from '../../assets/symbol.svg';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return(
    <nav className="navigation">
      <div className="navigation__logo-box">
        <img alt="symbol" className="logo" src={Symbol} />
        <img alt="logo" className="logo" src={Logo} />
      </div>

      <ul className="navigation__list">
        <li className="navigation__item"><NavLink className="navigation__link" to="/">Home</NavLink></li>
        <li className="navigation__item"><NavLink className="navigation__link" to="/favorites">Favorites</NavLink></li>
        <li className="navigation__item"><NavLink className="navigation__link" to="/signup">Join</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navigation;
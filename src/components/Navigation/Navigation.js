import React from 'react';
import './navigation.scss';
import Logo from '../../assets/logo.svg';
import Symbol from '../../assets/symbol.svg';

const Navigation = () => {
  return(
    <nav className="navigation">
      <div className="navigation__logo-box">
        <img alt="symbol" className="logo" src={Symbol} />
        <img alt="logo" className="logo" src={Logo} />
      </div>

      <ul className="navigation__list">
        <li className="navigation__item"><a className="navigation__link" href="#">Home</a></li>
        <li className="navigation__item"><a className="navigation__link" href="#">Favorites</a></li>
        <li className="navigation__item"><a className="navigation__link">Join</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;
import React, { Component } from 'react';
import './navigation.scss';
import Logo from '../../assets/logo.svg';
import Symbol from '../../assets/symbol.svg';
import { NavLink } from 'react-router-dom';
import { NavAnimation } from '../../animations/animations';

class Navigation extends Component {
  state = {
    toggle: false
  }

  toggleMenu = () => {
    const currentState = this.state.toggle;
    this.setState({
      toggle: !currentState
    })
  } 


  render() {
    return (
      <nav className="navigation">
        <NavAnimation>
          <div className="navigation__logo-box">
            <img alt="symbol" className="logo" src={Symbol} />
            <img alt="logo" className="logo" src={Logo} />
          </div>
        </NavAnimation>

        <NavAnimation>
          <ul className="navigation__list">
            <li className="navigation__item"><NavLink className="navigation__link" to="/">Home</NavLink></li>
            <li className="navigation__item"><NavLink className="navigation__link" to="/favorites">Favorites</NavLink></li>
            <li className="navigation__item"><NavLink className="navigation__link" to="/signup">Join</NavLink></li>
          </ul>
        </NavAnimation>

        {/* hamburger menu for mobile devices */}

          {this.state.toggle ? 
          <div className="navigation__menu change" onClick={this.toggleMenu}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
           : 
          <div className="navigation__menu" onClick={this.toggleMenu}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>

        }
        {this.state.toggle ? 
          <ul className="menu-list">
            <li>Home</li>
            <li>Favorites</li>
        </ul> : null} 
      </nav>
    );
  }
}

export default Navigation;
import React from 'react';
import './footer.scss';
import Logo from '../../assets/logo.svg';
import Symbol from '../../assets/symbol.svg';

const Footer = () => {
  return(
    <footer className="footer-section">
      <div className="footer">
        <div className="footer__logo-box">
          <img alt="symbol" src={Symbol} />
          <img alt="logo" src={Logo} />
        </div>

        <div>
          <ul className="footer__list">
            <li className="footer__item"><a className="footer__link" href="#">Home</a></li>
            <li className="footer__item"><a className="footer__link" href="#">Favorites</a></li>
            <li className="footer__item"><a className="footer__link" href="#">Join</a></li>
          </ul>
        </div>

        <div className="footer__socials">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
          <a href="#"><i className="fab fa-pinterest"></i></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
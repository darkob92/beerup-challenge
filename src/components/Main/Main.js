import React, { Component } from 'react';
import './main.scss';
import Product from '../Product/Product';
import Crate from '../../assets/crate.svg';

class Main extends Component {
  render() {
    return(
      <section className="main-section">
        <div className="main-container">
          <div className="main-container__products-box">
            <h3>Beer</h3>

            <div className="main-container__products">
              {/**** product start ****/}
                <Product />
              {/**** product end ****/}
            </div>
          </div>

          <div className="main-container__favorites">
            <h3>Crate</h3>

            <ul className="favorites-list">
              <li className="favorites-list__item">One</li>
              <li className="favorites-list__item">Two</li>
              <li className="favorites-list__item">Three</li>
            </ul>

            <img alt="crate" src={Crate} />
            <p>Add a beer to have it appear in the crate.</p>
          </div>
        </div>
      </section>
    );
  }
}

export default Main;
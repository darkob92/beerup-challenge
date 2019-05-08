import React, { Component } from 'react';
import './main.scss';
import Heart from '../../assets/heart-solid.svg';
import Beer from '../../assets/beer-behind.svg';
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
              <div className="product">
                <img className="product__fav" src={Heart} />
                <img className="product__beer" src={Beer} />
                <div className="product__description">
                  <h4>Beer Name</h4>
                  <p>
                    <span>IBU</span>
                    <span>35</span>
                  </p>
                  <p>
                    <span>ABV</span>
                    <span>5,6%</span>
                  </p>
                </div>
              </div>
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

            <img src={Crate} />
            <p>Add a beer to have it appear in the crate.</p>
          </div>
        </div>
      </section>
    );
  }
}

export default Main;
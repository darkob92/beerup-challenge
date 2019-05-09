import React, { Component } from 'react';
import './main.scss';
import Product from '../Product/Product';
import Crate from '../../assets/crate.svg';

class Main extends Component {
  state = {
    beers: []
  }

  async componentDidMount() {
    const data = await fetch('https://api.punkapi.com/v2/beers');
    const beers = await data.json();

    this.setState({
      beers: beers
    });

    console.log(this.state.beers);
  }



  render() {
    return(
      <section className="main-section">
        <div className="main-container">
          <div className="main-container__products-box">
            <h3>Beer</h3>

            <div className="main-container__products">
              {/**** product start ****/}
                {this.state.beers.map((beer, i) => {
                  return(
                    <Product 
                      key={beer.id}
                      name={beer.name}
                      imgUrl={beer.image_url}
                      ibu={beer.ibu}
                      abv={beer.abv}
                    />
                  );
                })}
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
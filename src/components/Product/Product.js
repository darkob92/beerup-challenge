import React, { Component } from 'react';
import './product.scss';
import Heart from '../../assets/heart-solid.svg';
import Beer from '../../assets/beer-behind.svg';

class Product extends Component {
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
      <React.Fragment>
        {this.state.beers.map(beer => {
          return (
            <div className="product">
              <img alt="favorite" className="product__fav" src={Heart} />
              <img alt="beer" className="product__beer" src={beer.image_url} />
              <div className="product__description">
                <h4>{beer.name}</h4>
                <p>
                  <span>IBU</span>
                  <span>{beer.ibu}</span>
                </p>
                <p>
                  <span>ABV</span>
                  <span>{beer.abv}</span>
                </p>
              </div>
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}

export default Product;
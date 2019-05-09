import React from 'react';
import './product.scss';
import Heart from '../../assets/heart-solid.svg';

const Product = (props) => {
    return(
      <React.Fragment>
            <div className="product" key={props.key}>
              <img alt="favorite" className="product__fav" src={Heart} />
              <img alt="beer" className="product__beer" src={props.imgUrl} />
              <div className="product__description">
                <h4>{props.name}</h4>
                <p>
                  <span>IBU</span>
                  <span>{props.ibu}</span>
                </p>
                <p>
                  <span>ABV</span>
                  <span>{props.abv}</span>
                </p>
              </div>
            </div>
      </React.Fragment>
    );
}

export default Product;
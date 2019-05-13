import React, { Component } from 'react';
import './product.scss';
import HeartOutline from '../../assets/heart-outline.svg';
import Modal from '../Modal/Modal';
import { ProductsAnimations } from '../../animations/animations';

class Product extends Component {
  state = {
    isOpen: false
  }

  handleShowModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  

  render() {
    const { key, imgUrl, name, ibu, abv, description } = this.props;
    return (
      <React.Fragment>
        <ProductsAnimations>
          <div className="product" key={key} onClick={this.handleShowModal}>
            <img alt="favorite" className="product__fav" src={HeartOutline} />
            <img alt="beer" className="product__beer" src={imgUrl} />
            <div className="product__description">
              <h4>{name}</h4>
              <p>
                <span>IBU</span>
                <span>{ibu}</span>
              </p>
              <p>
                <span>ABV</span>
                <span>{abv}</span>
              </p>
            </div>
          </div>
        </ProductsAnimations>
        {
          this.state.isOpen && (
            <Modal 
            name={name} 
            description={description}
            imgUrl={imgUrl}
            />
          )
        }
      </React.Fragment>
    );
  }
}

export default Product;
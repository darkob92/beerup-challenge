import React, { Component } from 'react';
import './product.scss';
import HeartOutline from '../../assets/heart-outline.svg';
import Modal from '../Modal/Modal';

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
    return (
      <React.Fragment>
        <div className="product" key={this.props.key} onClick={this.handleShowModal}>
          <img alt="favorite" className="product__fav" src={HeartOutline} />
          <img alt="beer" className="product__beer" src={this.props.imgUrl} />
          <div className="product__description">
            <h4>{this.props.name}</h4>
            <p>
              <span>IBU</span>
              <span>{this.props.ibu}</span>
            </p>
            <p>
              <span>ABV</span>
              <span>{this.props.abv}</span>
            </p>
          </div>
        </div>
        {
          this.state.isOpen && (
            <Modal 
            name={this.props.name} 
            description={this.props.description}
            />
          )
        }
      </React.Fragment>
    );
  }
}

export default Product;
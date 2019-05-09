import React from 'react';
import './modal.scss';
import Beer from '../../assets/beer-behind.svg';
import HeartOutline from '../../assets/heart-outline.svg';
import '../Banner/banner.scss';

const Modal = (props) => {
    return(
      <div className="modal">
        <img src={HeartOutline} />
        <img src={Beer} />
        <div className="modal__about">
          <h3>{props.name}</h3>
          <p>{props.description}</p>
          <a className="button" href="#">Add To Crate</a>
        </div>
      </div>
    );
}

export default Modal;
import React, { Component } from 'react';
import '../../Sass/components.scss';
import './modal.scss';
import HeartOutline from '../../assets/heart-outline.svg';
import Close from '../../assets/Close-icon.svg';
import '../Banner/banner.scss';
import EscapeOutside from "react-escape-outside";

class Modal extends Component {
  state = {
    close: false
  }

  /* function for closing modal by pressing X  */
  handleCloseModal = (e) => {
    if (e.target) {
      this.setState({
        close: !this.state.close
      })
    }
  }

  handleEscapeOutside = () => {
    this.setState({ close: !this.state.close })
  }

  render() {
    const { imgUrl, name, description } = this.props;
    return (
      <React.Fragment>
        {
          this.state.close === true ? 
          null :
            <EscapeOutside onEscapeOutside={this.handleEscapeOutside}>
              <div className="modal" onKeyUp={this.handleEscapeModal}>
                <img alt="heart-outline" className="icons" src={HeartOutline} />
                <img alt="close-button" className="icons" src={Close} onClick={this.handleCloseModal} />
                <img alt={name} src={imgUrl} />
                <div className="modal__about">
                  <h3>{name}</h3>
                  <p>{description}</p>
                  <a className="btn btn--medium btn__modal" href="#">Add To Crate</a>
                </div>
              </div>
            </EscapeOutside>
        }
      </React.Fragment>
    );
  }
}

export default Modal;
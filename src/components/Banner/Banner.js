import React from 'react';
import '../../Sass/components.scss';
import './banner.scss';
import Beers from '../../assets/illustration.svg';
import Cap from '../../assets/cap.svg';
import { Link } from 'react-router-dom';
import { BeerAnimation } from '../../animations/animations';

const Banner = () => {
  return(
    <section className="banner-section">
      <div className="banner">
        <div className="banner__title-box">
          <h5>The Beersteer pro 2.0</h5>
          <h1 className="title title--primary">Join our famous beerup!</h1>
          <Link className="btn btn--small btn__banner" to="/signup">Join beerup</Link>
        </div>
        <div className="banner__img">
          <BeerAnimation>
            <img alt="beers" src={Beers} />
          </BeerAnimation>
          <img alt="cap" src={Cap} />
        </div>
      </div>
    </section>
  );
}

export default Banner;
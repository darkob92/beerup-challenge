import React from 'react';
import './banner.scss';
import Beers from '../../assets/illustration.svg';
import Cap from '../../assets/cap.svg';

const Banner = () => {
  return(
    <section className="banner">
      <div className="banner__title-box">
        <h5>The Beersteer pro 2.0</h5>
        <h1>Join our famous beerup!</h1>
        <a className="button" href="#">Join beerup</a>
      </div>
      <div className="banner__img">
        <img src={Beers} />
        <img src={Cap} />
      </div>
    </section>
  );
}

export default Banner;
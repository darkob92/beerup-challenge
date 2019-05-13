import React from 'react';
import { Tween, Timeline } from 'react-gsap';
import { Power1, Power2 } from 'gsap';

const BeerAnimation = (props) => {
  return(
    <Tween from={{y: '-500', opacity: 0, duration: 1, ease: Power1.easeOut}}>
      {props.children}
    </Tween>
  );
}

const TitleAnimation = (props) => {
  return(
    <Tween from={{ opacity: 0, delay: 1.5, duration: 1.5, ease: Power1.easeOut}}>
      {props.children}
    </Tween>
  );
}

const NavAnimation = (props) => {
  return(
    <Tween from={{y: '100', opacity: 0, delay: 1, ease: Power2.easeOut}}>
      {props.children}
    </Tween>
  );
}

export {
  BeerAnimation,
  NavAnimation,
  TitleAnimation
};
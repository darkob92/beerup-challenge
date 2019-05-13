import React from 'react';
import { Tween, Timeline } from 'react-gsap';
import { Power1 } from 'gsap';

const BeerAnimation = (props) => {
  return(
    <Tween from={{y: '-500', opacity: 0, duration: '1', ease: Power1.easeOut}}>
      {props.children}
    </Tween>
  );
}

const NavAnimation = (props) => {
  return(
    <Tween from={{y: '100', opacity: 0, delay: 1, ease: Power1.easeOut}}>
      {props.children}
    </Tween>
  );
}

export {
  BeerAnimation,
  NavAnimation
};
import React from 'react';
import './nav.css';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import { FaDrumstickBite } from 'react-icons/fa';

const Nav = () => {
  return (
    <Aux>
    <nav>
      <h1>RELBON <FaDrumstickBite /></h1>
    </nav>
    </Aux>
  );
}

export default Nav;
import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Nav = () => (
  <nav className="buttons">
    <Button variant="dark">
      <NavLink to="/home">Home</NavLink>
    </Button>
    <Button>
      <NavLink to="/about">About</NavLink>
    </Button>
    <Button>
      <NavLink to="/schedule">Schedule</NavLink>
    </Button>
    <Button>
      <NavLink to="/speakers">Speakers</NavLink>
    </Button>
  </nav>
);

export default Nav;

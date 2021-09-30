import React, { Fragment } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const alwaysOptions = (
  <Fragment>
    <Nav.Link href="#home">Home</Nav.Link>
    <Nav.Link href="#speakers">Speakers</Nav.Link>
  </Fragment>
);

const Header = () => (
  <Navbar bg="dark" variant="dark" expand="md">
    <Navbar.Brand href="#">Summit</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">{alwaysOptions}</Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;

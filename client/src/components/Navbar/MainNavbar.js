import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import logo from './logo.png';

function MainNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#events">Services</Nav.Link>
            <Nav.Link href="#resources">Resources</Nav.Link>
            <Nav.Link href="#caretakers">Meet Our Caretakers</Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand href="#home" className="mx-auto">
          <img
            src={logo}
            width="170"
            height="50"
            className="d-inline-block align-top"
            alt="Company Logo"
          />       
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;

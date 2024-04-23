import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import logo from './logo.png';
import logo2 from './logo2.png';

function MainNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container className="py-0">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" style={{color: '#0056b3'}}>Home</Nav.Link>
            <Nav.Link href="#events" style={{color: '#0056b3'}}>Services</Nav.Link>
            <Nav.Link href="#resources" style={{color: '#0056b3'}}>Resources</Nav.Link>
            <Nav.Link href="#caretakers" style={{color: '#0056b3'}}>Meet Our Caretakers</Nav.Link>
            <Nav.Link href="#contact" style={{color: '#0056b3'}}>Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand href="#home" className="mx-auto">
          {/*<img
            src={logo}
            width="175"
            height="75"
            className="d-inline-block align-top"
            alt="Company Logo"
          />*/}
          <img
            src={logo2}
            width="130"
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

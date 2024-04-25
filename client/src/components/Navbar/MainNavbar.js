import React from 'react';
import { Link } from 'react-scroll';
import { Container, Navbar, Nav } from 'react-bootstrap';
import logo2 from './logo2.png';
import './navBar.css';

function MainNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" >
      <Container className="py-0" style={{boxShadow: 'none'}}>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="home" spy={true} smooth={true} duration={500} className="nav-link" style={{color: '#0056b3'}}>Home</Link>
            <Link to="how-it-works" spy={true} smooth={true} duration={500} className="nav-link" style={{color: '#0056b3'}}>How It Works</Link>
            <Link to="services" spy={true} smooth={true} duration={500} className="nav-link" style={{color: '#0056b3'}}>Our Services</Link>
            <Link to="bio" spy={true} smooth={true} duration={500} className="nav-link" style={{color: '#0056b3'}}>Who We Are</Link>
            <Link to="schedule" spy={true} smooth={true} duration={500} className="nav-link" style={{color: '#4CAF50'}}><strong>Free Consultation</strong></Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand href="#home" className="mx-auto">
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

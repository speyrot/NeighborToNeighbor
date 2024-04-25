import React from 'react';
import { Container } from 'react-bootstrap';
import './footer.css';

function Footer() {
  return (
    <footer className="footer text-center">
      <Container id="foot" className="py-3">
        <div>
          &copy; {new Date().getFullYear()} Neighbor to Neighbor Care LLC - Columbus, OH
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
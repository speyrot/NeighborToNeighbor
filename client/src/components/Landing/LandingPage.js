import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import './LandingPage.css';  

function LandingPage() {
  return (
    <div className="landing-page-background">
      <div className="container-background">
        <h1>Welcome to Senior Care!</h1>
        <p>Dedicated to providing the best care for your loved ones.</p>
        <Button variant="primary" href="#meet-caretakers">Meet Our Caretakers</Button>
      </div>
    </div>
  );
}

export default LandingPage;

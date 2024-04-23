import React from 'react';
import { Button } from 'react-bootstrap';
import './LandingPage.css';  

function LandingPage() {
  return (
    <div className="landing-page-background">
      <div className="container-background">
        <h1>Let’s Talk About Your Care Needs!</h1>
        <p>Get Personalized Care with a Free Consultation.</p>
        <Button style={{backgroundColor: '#0056b3'}} href="#meet-caretakers">Click Here</Button>
      </div>
    </div>
  );
}

export default LandingPage;

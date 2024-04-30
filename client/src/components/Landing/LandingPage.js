import React from 'react';
import { Link } from 'react-scroll';
import './LandingPage.css';  

function LandingPage() {
  return (
    <div className="landing-page-background">
      <div className="container-background">
        <h1 className="mb-4">Let’s Talk About Your Care Needs!</h1>
        <p>Get Personalized Care with a Free Consultation.</p>
        <Link to="schedule" spy={true} smooth={true} duration={500} className="nav-link" style={{backgroundColor: '#006400', color: '#fff', borderRadius: '5px', padding: '10px 20px'}}><strong>Click Here</strong></Link>
      </div>
    </div>
  );
}

export default LandingPage;

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import kingsley from './kingsley.png';
import zoe from './zoe.png';

function Bio() {
  return (
    <Container className="my-2">
      <h1 className="text-center mb-4">Who We Are</h1>
      <Row className="justify-content-center align-items-center">
        <Col md={6}>
          <div className="text-center">
            {/* Placeholder for Kingsley's image */}
            <img src={kingsley} alt="Kingsley Fomba" style={{ width: '200px', height: '200px', borderRadius: '50%', objectFit: 'cover' }} />            
            <h3>Kingsley Fomba</h3>
            <p style={{color: '#0056b3'}}>Owner / Management</p>
            <p>I have been a caregiver for over seven years, starting in high school by helping an elderly neighbor. My experience has grown to include clients from various backgrounds with different abilities, specializing in elderly care and developmental disabilities. My education from The Ohio State University has deepened my understanding of personalized, compassionate care.</p>
          </div>
        </Col>
        <Col md={6}>
          <div className="text-center">
            {/* Placeholder for Zoe's image */}
            <img src={zoe} alt="Zoe" style={{ width: '200px', height: '200px', borderRadius: '50%', objectFit: 'cover' }} />            
            <h3>Zoe</h3>
            <p style={{color: '#0056b3'}}>RN / Care Coordinator</p>
            <p>As a Registered Nurse pursuing a Nurse Practitioner degree at The Ohio State University, I have extensive experience in hospital and home care settings. I specialize in care planning and coordination, ensuring each client is matched with the best caregivers for their needs. Our team is thoroughly trained and background-checked, committed to promoting happiness and health in our clients.</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Bio;
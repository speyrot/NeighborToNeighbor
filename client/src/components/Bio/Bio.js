import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import kingsley from './kingsley.png';
import zoe from './zoe.png';
import gideon from './Gideon.jpeg';
function Bio() {
  return (
    <Container className="my-0" style={{boxShadow: 'none'}}>
      <h1 className="text-center mb-4">Who We Are</h1>
      <Row className="justify-content-center align-items-center">
        <Col md={6}>
          <div className="text-center">
            <img src={kingsley} alt="Kingsley Fomba" style={{ width: '200px', height: '200px', borderRadius: '50%', objectFit: 'cover' }} />            
            <h3>Kingsley Fomba</h3>
            <p style={{color: '#0056b3'}}>Owner / Management</p>
            <p>I have been a caregiver for over seven years, starting in high school by helping an elderly neighbor. My experience has grown to include clients from various backgrounds with different abilities, specializing in elderly care and developmental disabilities. My education from The Ohio State University has deepened my understanding of personalized, compassionate care.</p>
          </div>
        </Col>
        <Col md={6}>
          <div className="text-center">
            <img src={zoe} alt="Zoe Davis" style={{ width: '200px', height: '200px', borderRadius: '50%', objectFit: 'cover' }} />            
            <h3>Zoe</h3>
            <p style={{color: '#0056b3'}}>RN / Care Coordinator</p>
            <p>As a Registered Nurse pursuing a Nurse Practitioner degree at The Ohio State University, I have extensive experience in hospital and home care settings. I specialize in care planning and coordination, ensuring each client is matched with the best caregivers for their needs. Our team is thoroughly trained and background-checked, committed to promoting happiness and health in our clients.</p>
          </div>
        </Col>
        <Col md={6}>
          <div className="text-center">
            <img src={gideon} alt="Gideon" style={{ width: '200px', height: '200px', borderRadius: '50%', objectFit: 'cover' }} />            
            <h3>Gideon Fomba</h3>
            <p style={{color: '#0056b3'}}>Client Relations Specialist</p>
            <p>Gideon's journey in the home health care industry began over six years ago, not from a boardroom, but from the heart of caregiving. Starting as a dedicated aide, he experienced firsthand the profound impact of compassionate and personalized support on individuals and their families. This invaluable experience ignited a passion within him, a deep-seated commitment to ensuring that every client receives not just care, but genuine understanding and respect.
            Driven by a desire to enhance his ability to serve, Gideon pursued and earned a Bachelor's degree in Business Administration from The Ohio State University. This academic foundation, coupled with his practical experience, allows him to approach client relations with a unique blend of empathy and strategic thinking. He understands the intricacies of navigating the healthcare system and is adept at translating complex information into clear, actionable solutions for clients and their families.</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Bio;
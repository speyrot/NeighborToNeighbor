import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import donationImage from './charity.jpg'; 
import './DonationInfo.css';

function DonationInfo() {
  return (
    <Container className="my-0 donation-container" style={{boxShadow: 'none'}}>
      <h1 className="text-center mb-4">Giving Back</h1>
      <Row className="justify-content-center align-items-center mb-4">
        <Col md={6} className="d-flex flex-column justify-content-center align-items-center">
          <img src={donationImage} alt="Healthcare Support" className="img-fluid donation-image mb-3" />
          <Button size="lg" className="w-75 custom-button" href="https://fightforhealthfoundation.org/">
            Learn More
          </Button>
        </Col>
        <Col md={6} className="d-flex flex-column justify-content-center">
          <div className="text-left w-100">
            <p>Growing up in Cameroon, I experienced firsthand the immense struggles families face in accessing basic healthcare. Many couldn't afford hospital bills or regular check-ups due to the high costs and limited opportunities. Driven by my personal experiences, I am determined to make a difference.</p>
            <p>I am partnering with <strong>Fight For Health</strong> in Bemenda, Cameroon, to help families access necessary health services. Committed to this cause, <strong>I plan to donate 10% of my business profits to aid families in need in Cameroon</strong>.</p>
            <p><strong>Fight For Health Foundation</strong> focuses on providing essential healthcare, combating drug abuse, supporting mental health, and improving the well-being of youths and the elderly in the North West region of Cameroon.</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default DonationInfo;
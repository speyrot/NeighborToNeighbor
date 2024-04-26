import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './service.css';
import exercise from './exercise.png';
import wheelchair from './wheelchair.png';
import shopping from './shopping.png';
import van from './van.png';
import companion from './companion.png';

function Services() {
  return (
    <Container className="my-0" style={{boxShadow: 'none'}}>
      <h1 className="text-center mb-4">Our Services</h1>

      <Row className="align-items-center service-row">
        <Col md={6}>
          <h3>Personal Care</h3>
          <ul>
            <li>Grooming</li>
            <li>Feeding</li>
            <li>Exercise Assistance</li>
          </ul>
        </Col>
        <Col md={6}>
          <img src={exercise} alt="Personal Care" className="img-fluid"/>
        </Col>
      </Row>

      <Row className="align-items-center service-row flex-md-row-reverse">
        <Col md={6}>
          <h3>Health Management</h3>
          <ul>
            <li>Medication Reminders</li>
            <li>Safe Transfers and Injury Prevention</li>
            <li>Assistance Upon Discharge from Hospital</li>
          </ul>
        </Col>
        <Col md={6}>
          <img src={wheelchair} alt="Health Management" className="img-fluid"/>
        </Col>
      </Row>

      <Row className="align-items-center service-row">
        <Col md={6}>
          <h3>Home Assistance</h3>
          <ul>
            <li>Housekeeping and Laundry</li>
            <li>Meal Preparation</li>
            <li>Grocery Shopping</li>
          </ul>
        </Col>
        <Col md={6}>
          <img src={shopping} alt="Home Assistance" className="img-fluid"/>
        </Col>
      </Row>

      <Row className="align-items-center service-row flex-md-row-reverse">
        <Col md={6}>
          <h3>Transportation Services</h3>
          <ul>
            <li>Transport to and from medical appointments</li>
            <li>Rides to special events</li>
            <li>Visits to family</li>
          </ul>
        </Col>
        <Col md={6}>
          <img src={van} alt="Mobility Support" className="img-fluid"/>
        </Col>
      </Row>

      <Row className="align-items-center service-row">
        <Col md={6}>
          <h3>Companionship and Support</h3>
          <ul>
            <li>Companionship</li>
            <li>Respite for Family Members</li>
            <li>Bathroom Assistance</li>
          </ul>
        </Col>
        <Col md={6}>
          <img src={companion} alt="Companionship and Support" className="img-fluid"/>
        </Col>
      </Row>
    </Container>
  );
}

export default Services;

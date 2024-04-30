import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './service.css';

function Services() {

  return (
    <Container className="my-0" style={{ boxShadow: 'none' }}>
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
          <img src="/exercise_small.jpeg" 
               srcset={`/exercise_small.jpeg 500w,
                        /exercise_medium.jpeg 1000w,
                        /exercise_large.jpeg 1500w`}
               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
               alt="Personal Care" 
               className="img-fluid"/>
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
          <img src="/wheelchair_small.jpeg"
               srcset={`/wheelchair_small.jpeg 500w,
                        /wheelchair_medium.jpeg 1000w,
                        /wheelchair_large.jpeg 1500w`}
               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
               alt="Health Management" 
               className="img-fluid"/>
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
          <img src="/shopping_small.jpeg"
               srcset={`/shopping_small.jpeg 500w,
                        /shopping_medium.jpeg 1000w,
                        /shopping_large.jpeg 1500w`}
               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
               alt="Home Assistance" 
               className="img-fluid"/>
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
          <img src="/transport_small.jpeg"
               srcset={`/transport_small.jpeg 500w,
                        /transport_medium.jpeg 1000w,
                        /transport_large.jpeg 1500w`}
               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
               alt="Mobility Support" 
               className="img-fluid"/>
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
          <img src="/companion_small.jpeg"
               srcset={`/companion_small.jpeg 500w,
                        /companion_medium.jpeg 1000w,
                        /companion_large.jpeg 1500w`}
               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
               alt="Companionship and Support" 
               className="img-fluid"/>
        </Col>
      </Row>
    </Container>
  );
}

export default Services;
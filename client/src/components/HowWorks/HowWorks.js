import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-scroll';
import './work.css';

function HowItWorks() {
  return (
    <Container className="my-0" style={{boxShadow: 'none'}}>
      <h2 className="text-center mb-4">How It Works</h2>
      <Row className="gx-4 gy-4 d-flex align-items-stretch">
        <Col md={6} lg={3} className="mb-4 d-flex">
          <Card className="w-100">
            <Card.Header as="h5" style={{backgroundColor: '#0056b3', color: '#FFF'}}>Step 1: Initial Call</Card.Header>
            <Card.Body>
              <Card.Text>
                Once we've received your information, we will have a detailed call to gather more information on the care situation, answer any pressing concerns, and set up a time to meet in person.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={3} className="mb-4 d-flex">
          <Card className="w-100">
            <Card.Header as="h5" style={{backgroundColor: '#0056b3', color: '#FFF'}}>Step 2: In-Home Assessment</Card.Header>
            <Card.Body>
              <Card.Text>
                Here we will answer all your questions, and ask some of our own to craft a customized care plan to your unique needs.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={3} className="mb-4 d-flex">
          <Card className="w-100">
            <Card.Header as="h5" style={{backgroundColor: '#0056b3', color: '#FFF'}}>Step 3: Start of Care</Card.Header>
            <Card.Body>
              <Card.Text>
                We will come with our Caregiver on the first day of care to go through the care plan together and help with introductions.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={3} className="mb-4 d-flex">
          <Card className="w-100">
            <Card.Header as="h5" style={{backgroundColor: '#0056b3', color: '#FFF'}}>Step 4: Client Visits</Card.Header>
            <Card.Body>
              <Card.Text>
                Once we have begun care, we will pop in at times our Caregiver is there to see how things are going and determine if we need to adjust the care plan.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <div className="d-flex justify-content-center mt-4">
        <Link to="schedule" spy={true} smooth={true} duration={500} className="green-btn"><strong>Schedule a Free Consultation</strong></Link>
      </div>
    </Container>
  );
}

export default HowItWorks;
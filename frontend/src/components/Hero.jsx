import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap'; // Add this import

const Hero = () => {
  return (
    <section id="home" className="hero-section py-5 bg-light">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="mb-4 mb-lg-0">
            <h1 className="display-4 fw-bold mb-3">Your Perfect Wedding Starts Here</h1>
            <p className="lead mb-4">We create unforgettable moments that last a lifetime. Let us handle the details while you enjoy your special day.</p>
            <Button variant="primary" size="lg" href="#contact">
              Get Started
            </Button>
          </Col>
          <Col lg={6}>
            <img 
              src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
              alt="Wedding couple" 
              className="img-fluid rounded shadow"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero; // Make sure this export is present
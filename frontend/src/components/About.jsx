import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaHeart, FaRing, FaGlassCheers } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-5 bg-light">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <h2 className="display-5 fw-bold mb-3">Our Story</h2>
            <p className="lead text-muted">
              Creating unforgettable moments that last a lifetime
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          {/* Mission Card */}
          <Col md={4}>
            <Card className="h-100 border-0 shadow-sm text-center p-4">
              <div className="icon-wrapper bg-primary bg-opacity-10 rounded-circle mx-auto mb-4">
                <FaHeart className="text-primary fs-3" />
              </div>
              <Card.Body>
                <Card.Title className="fw-bold">Our Mission</Card.Title>
                <Card.Text>
                  To make your wedding day as magical and stress-free as possible, 
                  creating beautiful memories you'll cherish forever.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Experience Card */}
          <Col md={4}>
            <Card className="h-100 border-0 shadow-sm text-center p-4">
              <div className="icon-wrapper bg-primary bg-opacity-10 rounded-circle mx-auto mb-4">
                <FaRing className="text-primary fs-3" />
              </div>
              <Card.Body>
                <Card.Title className="fw-bold">10+ Years Experience</Card.Title>
                <Card.Text>
                  With over a decade in the wedding industry, we've perfected 
                  the art of creating dream weddings for couples around the world.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Promise Card */}
          <Col md={4}>
            <Card className="h-100 border-0 shadow-sm text-center p-4">
              <div className="icon-wrapper bg-primary bg-opacity-10 rounded-circle mx-auto mb-4">
                <FaGlassCheers className="text-primary fs-3" />
              </div>
              <Card.Body>
                <Card.Title className="fw-bold">Our Promise</Card.Title>
                <Card.Text>
                  Personalized attention, flawless execution, and a commitment 
                  to making your special day everything you've imagined.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Team Section */}
        <Row className="mt-5 pt-4">
          <Col lg={6} className="mb-4 mb-lg-0">
            <div className="pe-lg-4">
              <h3 className="fw-bold mb-4">Meet Our Team</h3>
              <p className="text-muted">
                Our dedicated team of wedding specialists brings passion and 
                expertise to every event. From planners to designers, we work 
                together to bring your vision to life.
              </p>
              <ul className="list-unstyled text-muted">
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>
                  Certified wedding planners
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>
                  Creative design specialists
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>
                  Professional event coordinators
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={6}>
            <div className="ratio ratio-16x9 rounded overflow-hidden shadow">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Wedding planning team" 
                className="img-fluid object-fit-cover"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
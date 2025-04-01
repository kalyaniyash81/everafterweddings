import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { services } from '../data';

const Services = () => {
  return (
    <section id="services" className="py-5">
      <Container>
        <h2 className="text-center mb-5">Our Services</h2>
        <Row>
          {services.map((service) => (
            <Col key={service.id} md={6} lg={3} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="text-center">
                  <i className={`bi ${service.icon} display-4 text-primary mb-3`}></i>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
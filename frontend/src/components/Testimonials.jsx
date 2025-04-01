import React, { useRef } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { testimonials } from '../data';

const Testimonials = () => {
  const scrollContainerRef = useRef(null);

  const renderStars = (rating) => {
    return (
      <div className="mb-3">
        {[...Array(5)].map((_, i) => (
          <i 
            key={i} 
            className={`bi ${i < rating ? 'bi-star-fill' : 'bi-star'} text-warning me-1`}
          ></i>
        ))}
      </div>
    );
  };

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { current: container } = scrollContainerRef;
      const scrollAmount = direction === 'left' ? -400 : 400;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="testimonials" className="py-5 bg-light position-relative">
      <Container>
        <h2 className="text-center mb-5">What Couples Say</h2>
        
        {/* Navigation Arrows */}
        <Button 
          variant="outline-primary" 
          className="position-absolute start-0 top-50 translate-middle-y d-none d-md-block rounded-circle p-2"
          onClick={() => scroll('left')}
          style={{ zIndex: 1, width: '40px', height: '40px' }}
        >
          <i className="bi bi-chevron-left"></i>
        </Button>
        
        <Button 
          variant="outline-primary" 
          className="position-absolute end-0 top-50 translate-middle-y d-none d-md-block rounded-circle p-2"
          onClick={() => scroll('right')}
          style={{ zIndex: 1, width: '40px', height: '40px' }}
        >
          <i className="bi bi-chevron-right"></i>
        </Button>

        {/* Horizontal Scroll Container */}
        <div className="position-relative">
          <Row 
            ref={scrollContainerRef}
            className="flex-nowrap overflow-auto pb-4 scroll-container"
          >
            {testimonials.map((testimonial) => (
              <Col key={testimonial.id} xs={12} md={6} lg={4} className="mb-4 flex-shrink-0 px-2">
                <Card className="h-100 border-0 shadow-sm testimonial-card">
                  <Card.Body className="p-4">
                    {renderStars(testimonial.rating)}
                    <Card.Text className="fst-italic mb-4 fs-5">"{testimonial.review}"</Card.Text>
                    <Card.Subtitle className="text-muted m-0">- {testimonial.name}</Card.Subtitle>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
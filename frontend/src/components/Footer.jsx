import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          {/* Quick Links Column (Left) */}
          <Col md={4} className="mb-3 mb-md-0">
            <h5 className="text-primary">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#home" className="text-white text-decoration-none hover-accent">
                  <i className="bi bi-house-door me-2"></i> Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#services" className="text-white text-decoration-none hover-accent">
                  <i className="bi bi-gift me-2"></i> Services
                </a>
              </li>
              <li className="mb-2">
                <a href="#testimonials" className="text-white text-decoration-none hover-accent">
                  <i className="bi bi-chat-square-quote me-2"></i> Testimonials
                </a>
              </li>
              <li className="mb-2">
                <a href="#contact" className="text-white text-decoration-none hover-accent">
                  <i className="bi bi-envelope me-2"></i> Contact
                </a>
              </li>
            </ul>
          </Col>

          {/* Brand Info Column (Center) */}
          <Col md={4} className="mb-3 mb-md-0">
            <h5 className="text-primary">EverAfter Weddings</h5>
            <p className="">Creating magical moments since 2025.</p>
            <address className=" mt-3">
              <i className="bi bi-geo-alt me-2"></i> 123 Wedding Lane<br />
              Celebration, IND 3472<br />
              <i className="bi bi-envelope me-2"></i> info@everafter.com
            </address>
          </Col>

          {/* Social Media Column (Right) */}
          <Col md={4}>
            <h5 className="text-primary">Follow Us</h5>
            <div className="social-links mt-3">
              <a href="https://facebook.com" className="text-white me-3" aria-label="Facebook">
                <i className="bi bi-facebook fs-4 hover-accent"></i>
              </a>
              <a href="https://instagram.com" className="text-white me-3" aria-label="Instagram">
                <i className="bi bi-instagram fs-4 hover-accent"></i>
              </a>
              <a href="https://pinterest.com" className="text-white me-3" aria-label="Pinterest">
                <i className="bi bi-pinterest fs-4 hover-accent"></i>
              </a>
              <a href="https://twitter.com" className="text-white me-3" aria-label="Twitter">
                <i className="bi bi-twitter fs-4 hover-accent"></i>
              </a>
            </div>
            
            <div className="mt-4">
              <h5 className="text-primary">Newsletter</h5>
              <p className=" small">Subscribe for wedding tips and offers</p>
              <div className="input-group mb-3">
                <input 
                  type="email" 
                  className="form-control form-control-sm" 
                  placeholder="Your email" 
                  aria-label="Email"
                />
                <button className="btn btn-primary btn-sm" type="button">
                  <i className="bi bi-arrow-right"></i>
                </button>
              </div>
            </div>
          </Col>
        </Row>
        
        {/* Copyright (Centered - kept as original) */}
        <hr className="my-3" />
        <p className="text-center mb-0">
          &copy; {new Date().getFullYear()} EverAfter Weddings. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
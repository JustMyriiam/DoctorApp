import React from "react";
import { FaArrowRight, FaCopyright } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import { FiPhone, FiMail, FiHome } from "react-icons/fi";
// import { FaPhoneAlt } from 'react-icons/fa'

function Footer() {
  return (
    <footer >
        <Container fluid className="footer-content">
          <Row className="d-flex justify-content-center">
            <Col md={3}>
              <p className="foot-title">LIENS UTILES</p>
              <nav >
                <ul className="foot-nav">
                  <li>
                    <FaArrowRight className="icon" />
                    <a className='foot-link' href="/">Home</a>
                  </li>
                  <li>
                    <FaArrowRight className="icon" />
                    <a className='foot-link' href="/about">About</a>
                  </li>
                  <li>
                    <FaArrowRight className="icon" />
                    <a className='foot-link' href="/contact">Contact</a>
                  </li>
                </ul>
              </nav>
            </Col>
            <Col md={3}>
              <p className="foot-title">CONTACT</p>
              <ul className="foot-nav">
                <li>
                  <FiHome className="icon" />
                  <a className='foot-link' href="/">Address</a>
                </li>
                <li>
                  <FiMail className="icon" />
                  <a className='foot-link' href="mailto:info@example.com">info@example.com</a>
                </li>
                <li>
                  <FiPhone className="icon" />
                  <a className='foot-link' href="tel:+1234567890">+1 234 567 890</a>
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col className="foot-bottom">
                <FaCopyright className="icon" />
                <span > 2023 SGHAIER Mariem. All rights reserved.</span>
            </Col>
          </Row>
        </Container>
    </footer>
  );
}

export default Footer;

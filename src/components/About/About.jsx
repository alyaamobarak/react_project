import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="about-hero">
        <Container>
          <h1>About Us</h1>
          <p className="hero-subtitle">We are a global leader in sport and lifestyle</p>
        </Container>
      </div>

      {/* Vision Section */}
      <section className="vision-section">
        <Container>
          <Row>
            <Col md={6}>
              <h2>Our Vision</h2>
              <p>To be the best sports company in the world, creating the new, bringing the latest styles and innovations to our consumers.</p>
            </Col>
            <Col md={6}>
              <div className="vision-image">
                {/* Add your image here */}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <Container>
          <h2>Our Values</h2>
          <Row>
            <Col md={4}>
              <div className="value-card">
                <h3>People</h3>
                <p>We value and respect our people, their ideas and their contributions.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="value-card">
                <h3>Innovation</h3>
                <p>We drive innovation through creativity and continuous improvement.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="value-card">
                <h3>Sustainability</h3>
                <p>We are committed to making a positive impact on society and the environment.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <Container>
          <Row>
            <Col md={3}>
              <div className="stat-card">
                <h3>70+</h3>
                <p>Years of Innovation</p>
              </div>
            </Col>
            <Col md={3}>
              <div className="stat-card">
                <h3>160+</h3>
                <p>Countries</p>
              </div>
            </Col>
            <Col md={3}>
              <div className="stat-card">
                <h3>60K+</h3>
                <p>Employees</p>
              </div>
            </Col>
            <Col md={3}>
              <div className="stat-card">
                <h3>2K+</h3>
                <p>Stores</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default About; 
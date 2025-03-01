import React, { useState } from "react";
import { Container, Button, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import UserSignInForm from "../components/forms/UserSignInForm";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="vh-100 relative">
      {/* Hero Section */}
      <div className="bg-primary text-white text-center py-5  img-bg">
        <Container className="glassmophormism">
          <h1 className="display-4">
            Welcome to the Library Management System
          </h1>
          <p className="lead">
            Your one-stop solution for managing books, users, and library
            operations efficiently.
          </p>
          <div className="mt-4">
            <Button
              variant="light"
              size="lg"
              className="me-3"
              onClick={() => navigate("/signin")}
            >
              Login
            </Button>
            <Button
              variant="outline-light"
              size="lg"
              onClick={() => navigate("/signup")}
            >
              Register
            </Button>
          </div>
        </Container>
      </div>

      {/* Features Section */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Why Choose Us?</h2>
        <Row>
          <Col md={4} className="mb-4">
            <Card className="h-100 text-center parallelogram">
              <Card.Body>
                <Card.Title>Easy Book Management</Card.Title>
                <Card.Text>
                  Add, update, and organize books in your library with ease.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="h-100 text-center">
              <Card.Body>
                <Card.Title>User-Friendly Interface</Card.Title>
                <Card.Text>
                  A simple and intuitive interface for both librarians and
                  users.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="h-100 text-center">
              <Card.Body>
                <Card.Title>Advanced Analytics</Card.Title>
                <Card.Text>
                  Generate reports and gain insights into library usage.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Call to Action Section */}
      <div className="bg-light py-5">
        <Container className="text-center">
          <h2>Get Started Today</h2>
          <p className="lead mb-4">
            Join thousands of libraries managing their operations efficiently
            with our system.
          </p>
          <Button
            variant="primary"
            size="lg"
            onClick={() => navigate("/signup")}
          >
            Sign Up Now
          </Button>
        </Container>
      </div>
    </div>
  );
};

export default HomePage;

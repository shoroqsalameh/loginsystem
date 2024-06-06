import React, { useRef, useState } from 'react';
import { Form, Button, Card, Container, Row, Col, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../compnant/css/Register.css';
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Register = () => {
  const emailRef = useRef();
  const confirmEmailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (emailRef.current.value !== confirmEmailRef.current.value) {
      return setError("Emails do not match");
    }

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  }

  return (
    <Container fluid className="signup-page">
      <Row className="align-items-center justify-content-center h-100">
        <Col xs={12} md={8} lg={6} className="signup-container mx-auto">
          <Card className="signup-card">
            <Card.Body>
              <h2 className="text-center mb-4">Sign Up</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col xs={12} md={6}>
                    <Form.Group id="first-name">
                      <Form.Label className="sr-only">First Name</Form.Label>
                      <Form.Control type="text" placeholder="First Name" required />
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6}>
                    <Form.Group id="last-name">
                      <Form.Label className="sr-only">Last Name</Form.Label>
                      <Form.Control type="text" placeholder="Last Name" required />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={6}>
                    <Form.Group id="email">
                      <Form.Label className="sr-only">Email</Form.Label>
                      <Form.Control type="email" placeholder="Email" ref={emailRef} required />
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6}>
                    <Form.Group id="confirm-email">
                      <Form.Label className="sr-only">Confirm Email</Form.Label>
                      <Form.Control type="email" placeholder="Confirm Email" ref={confirmEmailRef} required />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={6}>
                    <Form.Group id="password">
                      <Form.Label className="sr-only">Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" ref={passwordRef} required />
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6}>
                    <Form.Group id="confirm-password">
                      <Form.Label className="sr-only">Confirm Password</Form.Label>
                      <Form.Control type="password" placeholder="Confirm Password" ref={passwordConfirmRef} required />
                    </Form.Group>
                  </Col>
                </Row>
                <Button disabled={loading} className="w-100 mt-3" type="submit">Sign up</Button>
              </Form>
              <div className="text-center mt-3">
                <span>Already have an account? <Link to="/login" className="text-decoration-none">Login</Link></span>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;

import React from 'react';
import { Form, Button, Card, Container, Row, Col, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import '../compnant/css/Login.css';

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch {
      setError("Failed to log in");
    }
    setLoading(false);
  }

  return (
    <Container fluid className="login-page">
      <Row className="justify-content-center align-items-center min-vh-100">
        <Col xs={12} md={6} lg={4}>
          <div className="text-center mb-4">
            <h1>Tan<span className="highlight">Z</span>em</h1>
          </div>
          <Card className="login-card">
            <Card.Body>
              <h2 className="text-center mb-4">Sign In</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your Email" ref={emailRef} required />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Enter password" ref={passwordRef} required />
                </Form.Group>
                <div className="text-right mb-3">
                  <Link to="/forgot-password" className="text-decoration-none d-block mb-3">Forgot password?</Link>
                </div>
                <Button disabled={loading} className="w-100 mb-3" type="submit">Login</Button>
              </Form>
            </Card.Body>
          </Card>
          <div className="text-center mt-2">
            <span className="d-block mb-2">Don't have an account?</span>
            <Link to="/signup" className="text-decoration-none">Sign Up</Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;

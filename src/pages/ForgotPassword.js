import React, { useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import ".//css/ForgotPassword.css"; 

export default function ForgotPassword() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for further instructions");
    } catch {
      setError("Failed to reset password");
    }

    setLoading(false);
  }

  return (
    <>
            <h1 className="brand">Ta<span className="highlight" >NZ</span>em</h1>        

      <div className="forgot-password-card">
        
          <h2 className="text-center mb-4 ">Password Reset</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <form onSubmit={handleSubmit}>
            <div id="email">
              <input type="email" ref={emailRef} required />
            </div>
            <Button disabled={loading} className="w-100 mt-3" type="submit">
              Reset Password
            </Button>
          </form>
          <div className="w-100 text-center mt-3">
            <Link to="/login">Login</Link>
          </div>
       
      </div>
     
    </>
  );
}

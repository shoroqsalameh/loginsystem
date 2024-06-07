import React, { useRef, useState } from "react";
import { Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./css/Register.css";

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
    <>
               <h1 className="brand">Ta<span className="highlight" >NZ</span>em</h1>  
              <div className="SignupForm">
              <h2 class="signup-title">Sign Up</h2>
              {error && <div class="error-message">{error}</div>}
              <form onSubmit={handleSubmit} className="form">
                <input
                  type="text"
                  class="form-control"
                  placeholder="First Name"
                  required
                />
                <input
                  type="text"
                  class="form-control"
                  placeholder="Last Name"
                  required
                />

                <input
                  type="email"
                  class="form-control"
                  placeholder="Email"
                  ref={emailRef}
                  required
                />
                <input
                  type="email"
                  class="form-control"
                  placeholder="Confirm Email"
                  ref={confirmEmailRef}
                  required
                />

                <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                  ref={passwordRef}
                  required
                />

                <input
                  type="password"
                  class="form-control"
                  placeholder="Confirm Password"
                  ref={passwordConfirmRef}
                  required
                />

                <button disabled={loading} class="submit-button" type="submit">
                  Sign up
                </button>
              </form>
              <div class="login-link">
                <span>
                  Already have an account? <a href="/login">Login</a>
                </span>
              </div>

              </div>
          
      
    </>
  );
};

export default Register;

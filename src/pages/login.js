import React from 'react';
import { Form, Button, Card, Container, Row, Col, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import './css/Login.css';
import SVG from '../assest/todo-svg.svg'
import '../compnant/MainStyle.css';

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
     
    <div className='container'>
        <h1 className="brand">Ta<span className="highlight" >NZ</span>em</h1>        
        <div className='body'>
      
        <img src={SVG} className='illustration'></img>
        <div className='loginForm'>
            <h1>Sign in</h1>
            {error && <Alert variant="danger">{error}</Alert>}

            <form onSubmit={handleSubmit}>
              
                <input type='email' name='email' id='email' ref={emailRef} placeholder='Email' required className='formControl'/>
                <input type='password' name='password' ref={passwordRef} placeholder='Password' required className='formControl'/>
                <Link to="/forgot-password" className="forgotpasswod">Forgot password?</Link>
                <button disabled={loading} className='login-btn' type='submit' >Sign in</button>
              
               <Link to="/signup" className="signuplink">Don't have an account?</Link>

            </form>
        </div>
      </div>
     
   </div>
  );
}

export default Login;
 

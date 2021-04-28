// Copyright © 2021 Jonathan Dean Damiani
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import "./LoginForm.css";

const LoginForm = () => {
  const [zipCode, setZipCode] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push("/products");
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input id="zip-code" className="input-base" type="text" value={zipCode} required onChange={e => setZipCode(e.target.value)} placeholder="Zip Code" />
        </div>
        <div className="input-container">
          <input id="email" className="input-base" type="email" value={email} required onChange={e => setEmail(e.target.value)} placeholder="Email" />
        </div>
        <button className="button-base button-start" type="submit" value="Submit">
          Get Started
        </button>
        <p className="form-terms">Already have an account? <a href="#">Login</a></p>
      </form>
    </div>
    
  )
}

export default LoginForm;

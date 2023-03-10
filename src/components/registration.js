import React, { useState } from "react";
import "../design/registration.css";

export default function registration() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{7,}$/;
    return passwordRegex.test(password);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email || !name || !password || !passwordConfirmation) {
      setError("please fill out all fields.");
    } else if (!validateEmail(email)) {
      setError("Please enter a valid email.");
    } else if (!validatePassword(password)) {
      setError(
        "Password should be at least 7 characters with 1 capital letter, one number, and one special character."
      );
    } else if (password !== passwordConfirmation) {
      setError("Confirm password does not match.");
    } else {
      console.log("Registration successful!");
    }
  };

  return (
    <div>
      <h1>Registration Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={passwordConfirmation}
            onChange={(event) => setPasswordConfirmation(event.target.value)}
          />
        </div>
        {error && <div>{error}</div>}
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

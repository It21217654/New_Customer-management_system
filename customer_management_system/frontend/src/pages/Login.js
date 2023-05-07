import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const { login, error, isLoading } = useLogin();

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address");
      return false;
    } else {
      setEmailError("");
      return true;
    }
  };

  const validatePassword = () => {
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
      return false;
    } else {
      setPasswordError("");
      return true;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateEmail() && validatePassword()) {
      await login(email, password);
    }
  };

  return (
    <div className="container card mt-5 mb-5">
      <div className="row container">
        <div className="col-6 mt-2 p-3 mb-5 border-end border-dark">
          <img
            src="https://images6.alphacoders.com/329/329631.jpg"
            className="rounded"
            width={500}
            height={500}
          />
        </div>
        <div className="col-6">
          <form className="p-5 mt-5 mb-5" onSubmit={handleSubmit}>
          <h3 className="text-center">LOGIN</h3>
            <hr />
            <label>Email address:</label>
            <input
              className={`form-control mb-3 ${emailError ? "is-invalid" : ""}`}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            {emailError && <div className="invalid-feedback">{emailError}</div>}
            <label>Password:</label>
            <input
              className={`form-control mb-3 ${
                passwordError ? "is-invalid" : ""
              }`}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            {passwordError && (
              <div className="invalid-feedback">{passwordError}</div>
            )}
            <button className="btn btn-dark" disabled={isLoading}>
              Log In
            </button>
            <hr />
            <div className="row text-center">
              <div className="col-6">
                <Link
                  className="Links btn btn-dark text-white"
                  to="/forgotpassword"
                >
                  Forgot Password
                </Link>
              </div>
             
            </div>
            {error && <div className="error">{error}</div>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

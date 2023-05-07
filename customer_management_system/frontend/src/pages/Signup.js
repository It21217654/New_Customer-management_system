import React from "react";

import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import "./signup.css";

const Signup = () => {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [address, setaddress] = useState("");
  const [contact_number, setcontact_number] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!FirstName || !LastName || !address || !contact_number || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email");
      return;
    }

    if (password.length < 8) {
      alert("Password must be at least 8 characters long");
      return;
    }
    if (password.length < 8) {
      
      alert("Password must be at least 8 characters long");
      return;
    }

    await signup(email, password, FirstName, LastName, address, contact_number);
  };

  return (
    <form className="card container p-5,col-sm-5 p-2" onSubmit={handleSubmit}>
       <div className="card p-5 mb-5">
        <div className="row">
      <h3 className="text-center">CUSTOMER  REGISTRATION FORM</h3>
      <hr/>
      <div className="col-sm-5 p-2">
      <label >First Name:</label>
      <input
        type="text"
        onChange={(e) => setFirstName(e.target.value)}
        className="form-control"
        value={FirstName}
      />
      </div>
      <div className="col-sm-5 p-2">
      <label>Last Name:</label>
      <input
        type="text"
        onChange={(e) => setLastName(e.target.value)}
        className="form-control"
        value={LastName}
      />
       </div>
       <div className="col-sm-5 p-2">
      <label>Address:</label>
      <input
        type="text"
        onChange={(e) => setaddress(e.target.value)}
        className="form-control"
        value={address}
      />
      </div>
      <div className="col-sm-5 p-2">
      <label>Contact Number:</label>
      <input
        type="text"
        onChange={(e) => setcontact_number(e.target.value)}
        className="form-control"
        value={contact_number}
      />
      </div>
      <div className="col-sm-5 p-2">
      <label>Email:</label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        className="form-control"
        value={email}
      />
      </div>
      <div className="col-sm-5 p-2">
      <label>Password:</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        className="form-control"
        value={password}
      />
      </div>
      <div className="col-sm-12 p-2">
        <button type="submit" className="btn btn-primary" disabled={isLoading}>
          {isLoading ? "Signing up..." : "Sign up"}
        </button>
        {error && <div className="alert alert-danger mt-3">{error}</div>}
      </div>
      </div>
      </div>
    </form>
  );
};

export default Signup;

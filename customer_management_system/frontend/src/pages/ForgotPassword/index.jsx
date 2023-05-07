import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [resetKey, setResetKey] = useState("");

  const [emailSentStatus, setEmailSentStatus] = useState(false);

  const handleOnSubmit = () => {
    const dataObject = {
      email,
      password,
      resetKey,
    };

    axios
      .post(
        process.env.REACT_APP_BACKEND_API + "/api/user/resetpassword",
        dataObject
      )
      .then((response) => {
        console.log(response);
        toast.success("Password reset Sucessfully");
        window.location.href = "/login";
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something went wrong");
      });
  };

  const handleOnSubmitEmail = () => {
    const dataObject = {
      email,
    };

    axios
      .post(
        process.env.REACT_APP_BACKEND_API + "/api/user/generateresetkey",
        dataObject
      )
      .then((response) => {
        console.log(response);
        setEmailSentStatus(true)
        toast.success("Your reset key sent to the email");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something went wrong");
      });
  };

  return (
    <div className="container mt-5">
      <div className="card p-5 mb-5">
        <div className="row">
          <h3 className="text-center">RESET PASSWORD</h3>
          <hr />
          <div className="col-sm-12 p-2">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
            />
          </div>
          {emailSentStatus && (
            <>
              {" "}
              <div className="col-sm-12 p-2">
                <label>New Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="col-sm-12 p-2">
                <label>Reset Key</label>
                <input
                  type="text"
                  value={resetKey}
                  onChange={(e) => setResetKey(e.target.value)}
                  className="form-control"
                />
              </div>
            </>
          )}
        </div>
        <div className="row">
          {!emailSentStatus ? (
            <div className="col-sm-12 p-2">
              <button
                className="btn btn-success text-white w-100"
                onClick={handleOnSubmitEmail}
              >
                SEND EMAIL
              </button>
            </div>
          ) : (
            <>
              <div className="col-sm-12 p-2">
                <button
                  className="btn btn-success text-white w-100"
                  onClick={handleOnSubmit}
                >
                  RESET PASSWORD
                </button>
              </div>
              <div className="col-sm-12 p-2">
                <button
                  className="btn btn-info text-white w-100"
                  onClick={handleOnSubmitEmail}
                >
                  SEND EMAIL AGAIN
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;

import React from "react";
import { Link } from "react-router-dom";
import "./signup.css";
function Signup() {
  return (
    <div className="login_parent">
      <div className="login_main">
        <div>
          <img
            className="imageLogin"
            src="https://images.unsplash.com/photo-1603711549213-768a23c97437?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
            alt="image"
          />
        </div>
        <div className="formLogin">
          <div>
            <div className="signinParent">
              <h1>Sign in</h1>
            </div>
            <div className="formChild">
              <p>Name</p>
              <input type="text" />
              <p>Email address</p>
              <input type="text" />
              <p>Password</p>
              <input type="text" />
              <br />
              <button className="buttonLogin">Login</button>
              <p>
                u have an account{" "}
                <Link to="/" className="signupLink">
                  log in
                </Link>
              </p>
              <p>
                <Link to="/home" className="signupLink">
                  skip
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;

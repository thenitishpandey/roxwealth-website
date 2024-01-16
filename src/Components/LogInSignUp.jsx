import React, { useState } from "react";
import PropTypes from "prop-types";
import ReactModal from "react-modal";
import { GoogleLogin } from '@react-oauth/google';

const LoginSignup = ({ isOpen, onClose }) => {
  const [loginForm, setLoginForm] = useState(0);
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = () => {
    // Perform login action here
    localStorage.setItem("token", email);
    setMessage("Login Successful");
  };

  const handleSignup = () => {
    // Perform signup action here
    localStorage.setItem("token", email);
    setMessage("Signup Successful");
  };

  const handleSwitchForm = () => {
    setLoginForm((prevForm) => (prevForm === 0 ? 1 : 0));
    setMessage("");
  };

  const handleemailChange = (e) => {
    setemail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleForgotPassword = () => {
    setLoginForm(2);
  };

  const changeState = () => {
    // setLoginForm(0);
    setMessage("Verification Link Sent");
  };

  const handleGoogleLoginSuccess = (response) => {
    // Handle successful Google login here
    console.log(response);
  };

  const handleGoogleLoginFailure = (error) => {
    // Handle failed Google login here
    console.error(error);
  };


  return (
    <ReactModal isOpen={isOpen} onRequestClose={onClose} className="login-signup">
      <div className="login-signup__container">
        <div className="login-signup__dialog__close">
          <button onClick={onClose}>X</button>
        </div>
        <div className="login-signup__dialog">
          <div className="login-signup__dialog__form">
            {loginForm === 0 && (
              <div className="login-signup__dialog__form__login">
                <h1>Login</h1>
                <input
                  type="text"
                  placeholder="email"
                  value={email}
                  onChange={handleemailChange}
                  className="login-signup__input"
                  required="required"
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                  className="login-signup__input"
                  required="required"
                />
                <button onClick={handleLogin} className="login-signup__button">
                  Login
                </button>
                <div className="google-login">
            <GoogleLogin              
              buttonText="Join with Google"
              onSuccess={handleGoogleLoginSuccess}
              onFailure={handleGoogleLoginFailure}
              cookiePolicy={'single_host_origin'}
              className="google-login__button"
            />
          </div>
              </div>
              
            )}
            {loginForm === 1 && (
              <div className="login-signup__dialog__form__signup">
                <h1>Sign Up</h1>
                <input
                  type="text"
                  placeholder="email"
                  value={email}
                  onChange={handleemailChange}
                  className="login-signup__input"
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                  className="login-signup__input"
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  className="login-signup__input"
                />
                <button onClick={handleSignup} className="login-signup__button">
                  Sign Up
                </button>
                <div className="google-login">
            <GoogleLogin              
              buttonText="Register with Google"
              onSuccess={handleGoogleLoginSuccess}
              onFailure={handleGoogleLoginFailure}
              cookiePolicy={'single_host_origin'}
              className="google-login__button"
            />
          </div>

              </div>
            )}
            {loginForm === 2 && (
              <div className="login-signup__dialog__form__forgot">
                <h1>Forgot Password</h1>
                <input
                  type="text"
                  placeholder="email"
                  value={email}
                  onChange={handleemailChange}
                  className="login-signup__input"
                />
                <button onClick={changeState} className="login-signup__button">
                  Send Verification Link
                </button>
              </div>
            )}
          </div>

          <div className="login-signup__dialog__message">
            <p>{message}</p>
          </div>
          
          <div className="login-signup__dialog__switch">
            <div onClick={handleSwitchForm} className="change-state">
              <p>
                {loginForm === 0 && "New User? Sign Up"}
                {loginForm === 1 && "Already a User? Login"}
                {loginForm === 2 && "Back to Login"}
              </p>
            </div>
            <div onClick={handleForgotPassword} className="change-state">
              {loginForm === 0 && "Forgot Password?"}
              {loginForm === 1 && "Forgot Password?"}
            </div>
          </div>
        </div>
      </div>
    </ReactModal>
  );
};

LoginSignup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default LoginSignup;

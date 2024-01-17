import React, { useState } from "react";
import PropTypes from "prop-types";
import ReactModal from "react-modal";
import { GoogleLogin } from "@react-oauth/google";

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
    setMessage("Verification Link Sent");
  };

  const handleGoogleLoginSuccess = (response) => {
    console.log(response);
  };

  const handleGoogleLoginFailure = (error) => {
    console.error(error);
  };

  return (
    <ReactModal isOpen={isOpen} onRequestClose={onClose} className="fixed inset-0 flex items-center justify-center ">
      <div className="relative bg-gray-300 w-3/5 p-5">
        <div className="absolute top-3 right-3">
          <button onClick={onClose} className="text-xl font-bold">&times;</button>
        </div>
        <div className="m-3 p-3">
          <div className="">
            <div className="flex flex-col ">
              {loginForm === 0 && (
                <div className="flex flex-col">
                  <h1 className="text-2xl font-bold mb-4">Login</h1>
                  <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={handleemailChange}
                    className="p-2 mb-2 rounded"
                    required
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                    className="p-2 mb-2 rounded"
                    required
                  />
                  <button onClick={handleLogin} className="bg-green-500 text-white py-2 px-4 rounded">
                    Login
                  </button>
                  <div className="mt-2">
                    <GoogleLogin
                      buttonText="Join with Google"
                      onSuccess={handleGoogleLoginSuccess}
                      onFailure={handleGoogleLoginFailure}
                      cookiePolicy={'single_host_origin'}
                      className=""
                    />
                  </div>
                </div>
              )}
              {loginForm === 1 && (
                <div className="flex flex-col">
                  <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
                  <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={handleemailChange}
                    className="p-2 mb-2 rounded"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                    className="p-2 mb-2 rounded"
                  />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    className="p-2 mb-2 rounded"
                  />
                  <button onClick={handleSignup} className="bg-green-500 text-white py-2 px-4 rounded">
                    Sign Up
                  </button>
                  <div className="mt-2">
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
                <div className="flex flex-col p-3">
                  <h1 className="text-2xl font-bold mb-4">Forgot Password</h1>
                  <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={handleemailChange}
                    className="w-full p-3 mt-3"
                  />
                  <button onClick={changeState} className="bg-green-500 text-white py-2 px-4 rounded">
                    Send Verification Link
                  </button>
                </div>
              )}
            </div>

            <div className="login-signup__dialog__message">
              <p className="text-red-500">{message}</p>
            </div>

            <div className="login-signup__dialog__switch">
              <div onClick={handleSwitchForm} className="change-state cursor-pointer">
                <p className="text-blue-500 mt-3">
                  {loginForm === 0 && "New User? Sign Up"}
                  {loginForm === 1 && "Already a User? Login"}
                  {loginForm === 2 && "Back to Login"}
                </p>
              </div>
              <div onClick={handleForgotPassword} className="change-state cursor-pointer">
                <p className="text-blue-500 mt-2">

                {loginForm === 0 && "Forgot Password?"}
                {loginForm === 1 && "Forgot Password?"}
                </p>
              </div>
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

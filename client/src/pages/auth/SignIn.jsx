import React, { useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthProvider";

const LoginForm = () => {
  // const { setAuth } = useContext(AuthContext);
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const [token, setToken] = useState(null);
  const [success, setSuccess] = useState(false);
  const [loginError, setLoginError] = useState("");

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/signin",
        loginData
      );
      console.log(JSON.stringify(response?.data)); // Check the response data for the JWT token
      setToken(response.data.token);
      setLoginError("");
      setLoginData({ username: "", password: "" });
      setSuccess(true);
    } catch (error) {
      console.error(error);
      // Show an error message to the user if login fails
      setLoginError("Invalid username or password. Please try again.");
    }
  };

  return (
    <>
      {success ? (
        <section>
          <h1>You are logged in!</h1>
          <Link to="/">See blogs!!</Link>
        </section>
      ) : (
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={loginData.username}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
          />
          <button type="submit">Login</button>
          {loginError && <p>{loginError}</p>}
          {!loginError && token && (
            <p>Hello, {loginData.username}! Welcome back!</p>
          )}
          {!loginError && !token && (
            <p>
              If you don't have an account, please{" "}
              <Link to="/signup">sign up here</Link>.
            </p>
          )}
        </form>
      )}
    </>
  );
};

export default LoginForm;

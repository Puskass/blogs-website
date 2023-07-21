import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const LoginForm = () => {
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const [token, setToken] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

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
      console.log(response?.data); // Check the response data for the JWT token
      setToken(response?.data.token); // Check the response data for the JWT token

      const accessToken = response?.data?.token;
      setLoginData({ username: "", password: "" });
      setAuth({
        username: loginData.username,
        password: loginData.password,
        accessToken,
      });
      navigate(from, { replace: true });
    } catch (error) {
      console.error(error);
      // Show an error message to the user if login fails
      if (!error?.response) {
        setErrorMsg("No Server Response");
      } else if (error.response?.status === 400) {
        setErrorMsg("Missing Username or Password");
      } else if (error.response?.status === 401) {
        setErrorMsg("Unauthorized");
      } else {
        setErrorMsg("Login Failed");
      }
    }
  };

  return (
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
      {errorMsg && <p>{errorMsg}</p>}
      {!errorMsg && token && <p>Hello, {loginData.username}! Welcome back!</p>}
      {!errorMsg && !token && (
        <p>
          If you don't have an account, please{" "}
          <Link to="/signup">sign up here</Link>.
        </p>
      )}
    </form>
  );
};

export default LoginForm;

import React, { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "../../context/UserContext";

const RegistrationForm = () => {
  const { dispatch } = useContext(UserContext);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    firstName: "",
    lastName: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegistration = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/register", formData);
      if (response.status === 200) {
        // User registration successful
        dispatch({ type: "LOGIN", payload: response.data.user });
      } else {
        // Handle registration error
        console.error(response.data.error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleRegistration}>
      <input
        type="text"
        placeholder="Username"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="First Name"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Last Name"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;

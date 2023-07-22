import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";

const SignUp = () => {
  const { setToken } = useAuth();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if passwords match before making the API call
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match. Please try again.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/signup",
        formData
      );
      const { token } = response.data;
      setToken(token);
      // Handle successful response, e.g., show a success message or redirect to a different page
      console.log("SignUp Successful:", response.data);
      console.log(token);
    } catch (error) {
      // Handle error, e.g., show an error message to the user
      console.error("Error signing up:", error);
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;

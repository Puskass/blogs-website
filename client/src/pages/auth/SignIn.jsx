import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";

const SignIn = () => {
  const { setToken } = useAuth();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/signin",
        formData
      );
      const { token } = response.data;
      console.log("Received Token:", token);

      setToken(token); // Set the token in the context
      console.log("Token Set in Context", token);

      localStorage.setItem("token", token);
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  return (
    <div>
      <h1>Sign In</h1>
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
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;

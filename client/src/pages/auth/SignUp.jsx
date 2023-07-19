import React, { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "../../context/UserContext";

const RegistrationForm = () => {
  // const { dispatch } = useContext(UserContext);
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    firstName: "",
    lastName: "",
  });

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:5000/api/users/signup", userData)
    console.log(response.data)
    // try {
    //   const response = await axios.post("http://localhost:5000/api/users/signup", userData);
    //   console.log(response.data); // Response from the backend
    // } catch (error) {
    // //   console.error(error);
    // }
  }

  return (
    <form onSubmit={handleSignUp}>
      <input
        type="text"
        placeholder="Username"
        name="username"
        value={userData.username}
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        value={userData.password}
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        name="confirmPassword"
        value={userData.confirmPassword}
        onChange={handleChange}
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={userData.email}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="First Name"
        name="firstName"
        value={userData.firstName}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Last Name"
        name="lastName"
        value={userData.lastName}
        onChange={handleChange}
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;

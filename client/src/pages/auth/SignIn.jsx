import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const { authUser } = useAuth();

  const navigate = useNavigate();

  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const clearFormData = () => {
    setFormData({
      username: "",
      password: "",
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/signin",
        formData
      );
      const { token } = response.data;
      authUser(token);
      clearFormData();
      navigate("/");
    } catch (error) {
      handleServerError(error);
      console.error("Error signing in:", error);
    }
  };

  const handleServerError = (error) => {
    if (error.response && error.response.data && error.response.data.message) {
      switch (error.response.data.message) {
        case "User Not Found":
          setMessage("User not found. Please check your username.");
          break;
        case "Incorrect Password":
          setMessage("Incorrect password. Please try again.");
          break;
        default:
          setMessage(error.response.data.message);
      }
    } else {
      setMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="max-w-sm mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">
        Sign In
      </h1>

      {message && <div className="text-red-500 mb-4">{message}</div>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="username"
            id="username"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            autoComplete="off"
            onChange={handleInputChange}
            value={formData.username}
          />
          <label
            htmlFor="username"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Username
          </label>
        </div>

        <div className="relative z-0 w-full mb-6 group">
          <input
            type="password"
            name="password"
            id="password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            autoComplete="off"
            onChange={handleInputChange}
            value={formData.password}
          />
          <label
            htmlFor="password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Password
          </label>
        </div>

        <button
          type="submit"
          className="btn-submit bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center text-white"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;

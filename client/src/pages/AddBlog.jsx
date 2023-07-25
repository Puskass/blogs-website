import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const AddBlogForm = () => {
  const [formData, setFormData] = useState({
    enteredTitle: "",
    enteredDescription: "",
  });

  const { token } = useAuth();
  const navigate = useNavigate();

  const submitFormHandler = async (e) => {
    e.preventDefault();

    const blog = {
      id: Math.random().toString(),
      title: formData.enteredTitle,
      description: formData.enteredDescription,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/blogs/add-blog",
        blog,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // onBlogCreation(blog);
      console.log("Blog added successfully:", response.data);
      setFormData({
        enteredTitle: "",
        enteredDescription: "",
      });
      navigate("/");
    } catch (error) {
      console.error("Error adding blog:", error);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form
      className="max-w-md m-auto p-6 rounded-md shadow-md flex flex-col"
      onSubmit={submitFormHandler}
    >
      <h1 className="text-gray-900 text-xl text-center">Add New Blog</h1>
      <label className="text-gray-600 mb-1 font-semibold">Title</label>
      <input
        type="text"
        name="enteredTitle"
        className="text-black p-1 mb-4 rounded-md border border-sky-600 outline-sky-700"
        onChange={handleChange}
        value={formData.enteredTitle}
        required
      />
      <label className="text-gray-600 mb-1 font-semibold">Description</label>
      <textarea
        name="enteredDescription"
        className="text-black p-1 mb-4 h-40 overflow-auto rounded-md border border-sky-600 outline-sky-700"
        onChange={handleChange}
        value={formData.enteredDescription}
      ></textarea>
      <button className="mt-6 py-2 rounded bg-blue-700 text-white font-semibold hover:bg-blue-900 transition outline-blue-900">
        Post Blog
      </button>
    </form>
  );
};

export default AddBlogForm;

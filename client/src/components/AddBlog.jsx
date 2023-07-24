import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

const AddBlogForm = ({ onBlogCreation }) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");

  const { token } = useAuth();

  const submitFormHandler = async (e) => {
    e.preventDefault();

    const blog = {
      id: Math.random().toString(),
      title: enteredTitle,
      description: enteredDescription,
      createdAt: new Date().toDateString(),
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
      onBlogCreation(blog);
      console.log("Blog added successfully:", response.data);
      setEnteredTitle("");
      setEnteredDescription("");
    } catch (error) {
      console.error("Error adding blog:", error);
    }
  };

  return (
    <>
      <form
        className="max-w-md m-auto p-6 rounded-md shadow-md flex flex-col"
        onSubmit={submitFormHandler}
      >
        <h1 className="text-gray-900 text-xl text-center">Add New Blog</h1>
        <label className="text-gray-600 mb-1 font-semibold">Title</label>
        <input
          type="text"
          className="text-black p-1 mb-4 rounded-md border border-sky-600 outline-sky-700"
          onChange={(e) => setEnteredTitle(e.target.value)}
          value={enteredTitle}
        />
        <label className="text-gray-600 mb-1 font-semibold">Description</label>
        <textarea
          className="text-black p-1 mb-4 h-40 overflow-auto rounded-md border border-sky-600 outline-sky-700"
          onChange={(e) => setEnteredDescription(e.target.value)}
          value={enteredDescription}
        ></textarea>
        <button className="mt-6 py-2 rounded bg-blue-700 text-white font-semibold hover:bg-blue-900 transition outline-blue-900">
          Add Blog
        </button>
      </form>
    </>
  );
};

export default AddBlogForm;

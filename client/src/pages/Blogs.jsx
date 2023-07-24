import React, { useState } from "react";
import AddBlogForm from "../components/AddBlog";
import BlogList from "../components/BlogList";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const onBlogCreation = (blog) => {
    setBlogs((prevState) => {
      return [...prevState, blog];
    });
  };
  return (
    <div className="max-w-sm mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <AddBlogForm onBlogCreation={onBlogCreation} />
      <BlogList blogs={blogs} />
    </div>
  );
};

export default Blogs;

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
    <div className="p-20">
      <AddBlogForm onBlogCreation={onBlogCreation} />
      <BlogList blogs={blogs} />
    </div>
  );
};

export default Blogs;

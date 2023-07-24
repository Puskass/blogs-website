import React, { useEffect, useState } from "react";
import AddBlogForm from "../components/AddBlog";
import BlogList from "../components/BlogList";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

const Blogs = () => {
  const { token } = useAuth();

  const [blogs, setBlogs] = useState([]);
  const [blogsAPI, setBlogsAPI] = useState([]);

  const onBlogCreation = (blog) => {
    setBlogs((prevState) => {
      return [...prevState, blog];
    });
  };
  useEffect(() => {
    const fetchBlogs = async () => {
      // setIsLoading(true);
      try {
        const response = await axios.get("http://localhost:5000/api/blogs", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data);
        setBlogsAPI(response.data);
      } catch (error) {
        console.error("Failed to fetch blogs", error);
      }
      // setIsLoading(false);
    };

    fetchBlogs();
  }, []);
  return (
    <div className="max-w-sm mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <AddBlogForm onBlogCreation={onBlogCreation} />
      <BlogList blogs={blogs} />

      <>
        {blogsAPI.length === 0 ? (
          <p> No blogs </p>
        ) : (
          blogsAPI.map((blogAPI) => (
            <div key={blogAPI.title} className="max-w-lg mx-auto py-4">
              <p> {blogAPI.title} </p>
              <p> {blogAPI.content} </p>
            </div>
          ))
        )}
      </>
    </div>
  );
};

export default Blogs;

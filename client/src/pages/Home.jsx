import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      // setIsLoading(true);
      try {
        const response = await axios.get("http://localhost:5000/api/blogs");
        console.log(response.data);
        setBlogs(response.data);
      } catch (error) {
        console.error("Failed to fetch blogs", error);
      }
      // setIsLoading(false);
    };

    fetchBlogs();
  }, []);
  return (
    <div className="bg-green-500">
      <h1>Home</h1>
      <>
        {blogs.length === 0 ? (
          <p> No blogs </p>
        ) : (
          blogs.map((blogs) => (
            <div key={blogs.title} className="max-w-lg mx-auto py-4">
              <p> {blogs.title} </p>
              <p> {blogs.content} </p>
            </div>
          ))
        )}
      </>
    </div>
  );
};

export default Home;

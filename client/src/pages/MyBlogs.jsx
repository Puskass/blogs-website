import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

const MyBlogs = () => {
const [userBlogs, setUserBlogs] = useState([])

const { token } = useAuth()

  useEffect(() => {
    const fetchUserBlogs = async () => {
      // setIsLoading(true);
      try {
        const response = await axios.get("http://localhost:5000/api/user/blogs", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data);
        setUserBlogs(response.data);
      } catch (error) {
        console.error("Failed to fetch blogs", error);
      }
      // setIsLoading(false);
    };

    fetchUserBlogs();
  }, []);
  return <div className="bg-yellow-500">
    
    <h1>
      My Blogs
      </h1> 
      <>
        {userBlogs.length === 0 ? (
          <p> No posted blogs </p>
        ) : (
          userBlogs.map((userBlog) => (
            <div key={userBlog.title} className="max-w-lg mx-auto py-4">
              <p> {userBlog.title} </p>
              <p> {userBlog.content} </p>
            </div>
          ))
        )}
      </>  
  </div>;
};

export default MyBlogs;

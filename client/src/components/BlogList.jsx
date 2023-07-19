import React from "react";
import BlogItem from "./BlogItem";

const BlogList = ({ blogs }) => {
  const blogList = blogs.map((blog) => <BlogItem key={blog.id} blog={blog} />);
  return (
    <ul className="max-w-md m-auto mt-10 flex flex-col gap-6">{blogList}</ul>
  );
};

export default BlogList;

import React from "react";

const BlogItem = ({ blog }) => {
  return (
    <li className="p-6 rounded-md shadow-md">
      <h1 className="text-sky-700 text-lg ">{blog.title}</h1>
      <h3 className="mb-1">
        Created At:
        <span className="italic text-blue-500">
          {blog.createdAt.toLocaleString("en-US")}
        </span>
      </h3>
      <p className="text-gray-600">{blog.description}</p>
    </li>
  );
};

export default BlogItem;

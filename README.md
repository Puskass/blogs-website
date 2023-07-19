# Blogs Website

This is a simple Blogs website built using the MERN (MongoDB, Express, React, Node.js) stack. The website allows users to post and view blogs. Users can register and sign in to access their own blogs, and they can also view blogs posted by other users.

## Features

- **User Registration and Login**: Users can register with their username, password, email, first name, and last name. Once registered, they can log in using their username and password.
- **User Authentication**: The website uses JSON Web Tokens (JWT) for user authentication, ensuring that only logged-in users can access certain features like creating new blogs.
- **Add New Blogs**: Logged-in users can create and publish new blogs by providing a title and description.
- **View All Blogs**: The homepage displays all the blogs posted by users, including the blog title, description, and creation date.
- **View My Blogs**: Logged-in users can access a page that displays only the blogs they have posted.
- **Error Handling**: The website has proper error handling for registration, login, and blog creation processes, providing informative error messages to users.

## Technologies Used

- **Frontend**: React.js, Axios, React Router DOM
- **Backend**: Node.js, Express.js, MongoDB
- **Authentication**: JSON Web Tokens (JWT)

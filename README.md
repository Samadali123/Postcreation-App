# Post Creation Practice App

This project is a backend API for a post creation practice application built using Express.js, MongoDB, Node.js, and Passport.js for user authentication. It allows users to register, log in, and create posts.

## Table of Contents
- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Demo
There is no live demo available for the backend API.

## Features
- User registration and authentication using Passport.js
- Create and manage posts
- View all posts

## Technologies Used
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Node.js](https://nodejs.org/)
- [Passport.js](http://www.passportjs.org/)

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/post-creation-app.git
    cd post-creation-app
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add the following environment variables:
    ```env
    PORT=5000
    MONGODB_URI=your_mongodb_uri
    SESSION_SECRET=your_session_secret
    ```

4. Run the development server:
    ```bash
    npm run dev
    ```

5. The server will be running at `http://localhost:5000`.

## Usage
- **User Registration**: Sign up for a new account using `/api/auth/register`.
- **User Login**: Log in with your registered credentials using `/api/auth/login`.
- **Create Posts**: Create posts using `/api/posts`.
- **View Posts**: View all posts using `/api/posts`.

## Project Structure

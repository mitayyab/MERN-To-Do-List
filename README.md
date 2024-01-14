# MERN Stack Todo List Application

## Overview

This is a simple Todo List application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It allows users to create, update, and delete tasks, providing a basic yet functional todo management system.

To see the application live : https://mern-to-do-list-8ssf.vercel.app/

## Table of Contents

- [Features](#features)
- [How To Use](#how-to-use)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)

## Features

- Create, Read, Update, and Delete (CRUD) operations for tasks.
- Responsive and user-friendly web interface.
- MongoDB for data storage.
- Express.js for the backend server.
- React.js for the frontend user interface.
- Node.js for server-side scripting.

## How To Use
- Add Task: Write task and click the + button
- Show Task Details: Click on the circular icons
- Show All Tasks: Click on the arrow icon
- Edit Task: Double click on task make relevent changes and again double click to implement changes
- Delete Task: Click detele button in task details

## Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/mitayyab/MERN-To-Do-List
   ```

2. Change into the project directory:

   ```
   cd mern-todo-list
   ```

3. Install backend dependencies:

   ```
   cd backend
   npm install
   ```

4. Install frontend dependencies:

   ```
   cd ../frontend
   npm install
   ```

## Configuration

1. Set environment variables and Configure MongoDB:

    - Create a `.env` file in the `backend` directory.
    - Update the MongoDB connection string in `backend/config/config.js`.
    - Add the following variables:

     ```
     PORT=3001
     MONGO_DB_CONN_STR = `con-str`
     ```

     Replace `con-str` with a connection-string which you will retreive from MongoDB Atlas website.

## Usage

1. Start the backend server:

   ```
   cd backend
   npm start
   ```

2. Start the frontend development server:

   ```
   cd ../frontend
   npm start
   ```

3. Open your browser and go to the adviced link to access the Todo List application.

## API Endpoints

- **POST /api/createTask:** Create a new task.
- **GET /api/getAllTasks:** Get all tasks.
- **PATCH /api/updateTask:** Update a task.
- **DELETE /api/deleteTask/:_id:** Delete a task.

## Technologies Used

- [MongoDB](https://www.mongodb.com/)
- [Express.js](https://expressjs.com/)
- [React.js](https://reactjs.org/)
- [Node.js](https://nodejs.org/)

## Contributing

Feel free to contribute to this project. You can create issues, open pull requests, or provide suggestions for improvements.

# React MySQL Project

This project is a full-stack web application that allows users to manage a collection of books. The frontend is built with React, providing a dynamic and responsive user interface, while the backend is powered by Node.js and MySQL, offering robust data storage and API endpoints for CRUD operations. Users can create, read, update, and delete book entries, with each book containing details such as title, description, price, and cover image.

The project demonstrates the integration of a modern frontend framework with a relational database, making it a great starting point for learning full-stack development or building similar applications.

## Features

- **Frontend**: Built with React, featuring a responsive design and seamless user interactions.
- **Backend**: Node.js with Express for API endpoints and MySQL for data storage.
- **CRUD Operations**: Full support for creating, reading, updating, and deleting book records.
- **RESTful API**: Well-structured API endpoints for managing book data.
- **Database Integration**: MySQL database for reliable and efficient data management.
- **Cross-Origin Resource Sharing (CORS)**: Enabled to allow communication between the frontend and backend during development.

Follow the steps below to set up and run the project locally.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [MySQL](https://www.mysql.com/)

## Project Structure

```
react-mysql/
├── client/       # React frontend
├── server/       # Backend server (Node.js + MySQL)
└── README.md     # Project setup instructions
```

## Setup Instructions

### 1. Clone the Repository

```bash
git clone <repository-url>
```

### 2. Set Up the Backend

1. Navigate to the `server` directory:

   ```bash
   cd server
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the `server` directory and configure the following environment variables:

   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=yourpassword
   DB_NAME=yourdatabasename
   PORT=5000
   ```

4. Initialize the database:

   - Create a MySQL database with the name specified in `DB_NAME`.
   - Run any provided SQL scripts to set up the database schema and seed data.

5. Start the backend server:

   ```bash
   npm start
   ```

   The backend server will run on [http://localhost:5000](http://localhost:5000).

### 3. Set Up the Frontend

1. Navigate to the client directory:

   ```bash
   cd ../client
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the React development server:

   ```bash
   npm start
   ```

   The frontend will run on [http://localhost:3000](http://localhost:3000).

### 4. Access the Application

- Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the application.
- Ensure the backend server is running for the frontend to communicate with the API.

### Backend

- `npm run dev`: Start the backend server in development mode with hot-reloading.

### Frontend

- `npm run build`: Build the React app for production.
- `npm test`: Run tests for the React app.

## Learn More

- [React Documentation](https://reactjs.org/)
- [MySQL Documentation](https://dev.mysql.com/doc/)
- [Node.js Documentation](https://nodejs.org/en/docs/)

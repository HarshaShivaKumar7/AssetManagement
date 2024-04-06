# Asset Management System

Welcome to the Asset Management System project! This system aims to provide a comprehensive solution for managing assets efficiently. Whether you're tracking physical equipment, digital assets, or any other resources, this system has got you covered.

## Features

- **User Authentication:** Secure login and authentication system to manage user access.
- **Database Integration:** Integration with MongoDB Atlas for storing asset data.
- **Frontend UI:** A user-friendly interface built with React for easy navigation and interaction.
- **Backend API:** RESTful API powered by Express.js to handle backend operations.
- **CRUD Operations:** Full support for Create, Read, Update, and Delete operations on assets.

## Getting Started

### Backend Setup

1. Create a MongoDB Atlas account and obtain the database URL.
2. Rename the `.variables.env.tmp` file to `.variables.env`.
3. Open the `.variables.env` file and paste your MongoDB URL: `DATABASE=your-mongodb-url`.
4. Install dependencies by running `npm install`.
5. Run the setup script with `npm setup`.

### Frontend Setup

1. Navigate to the `frontend` directory.
2. Install frontend dependencies with `npm install`.
3. Update the API configuration in `src/frontend/src/config/serverApiConfig.js` to point to localhost.

### Running the Server

1. To start the backend server, run `npm start`.
2. To launch the React app, navigate to the `frontend` directory and run `npm start`.

## Credentials

- **Username:** admin@demon.com
- **Password:** admin123

Feel free to explore the system and manage your assets efficiently!

---

**Note:** This README provides a basic overview of the setup process. Make sure to customize it further according to your project's specific requirements and guidelines.

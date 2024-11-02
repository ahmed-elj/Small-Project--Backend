# Authentication API Backend

## Description
A Node.js/Express backend service that provides authentication endpoints for user registration and login. This backend works in conjunction with an Angular frontend application.

## Features
- User Registration (Signup)
- User Authentication (Login)
- Password Hashing with bcrypt
- JWT Token Generation
- MongoDB Integration
- CORS Support
- Input Validation

## Tech Stack
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (jsonwebtoken)
- bcrypt
- cors

## Prerequisites
- Node.js (Latest LTS version)
- MongoDB installed and running locally
- npm (Node Package Manager)

## Installation
1. Clone the repository
2. Install dependencies:
```bash
npm install
```

## Configuration
The application uses the following default configurations:
- MongoDB URL: `mongodb://localhost:27017/ahmed`
- Server Port: 3000
- JWT Secret Key: "your-secret-key-here" (Should be changed in production)

## API Endpoints

### Signup
- **URL**: `/api/signup`
- **Method**: POST
- **Body**:
```json
{
    "name": "string",
    "email": "string",
    "password": "string"
}
```

### Login
- **URL**: `/api/login`
- **Method**: POST
- **Body**:
```json
{
    "email": "string",
    "password": "string"
}
```
- **Success Response**: Returns JWT token and user information

## Running the Application
Start the server:
```bash
node index.js
```

## Security Features
- Password hashing using bcrypt
- JWT token-based authentication
- Input validation and sanitization
- CORS protection

## Related Frontend
This backend is designed to work with an Angular frontend application. The frontend repository contains the user interface for registration and login functionality.

## Error Handling
The API includes comprehensive error handling for:
- Invalid credentials
- Duplicate email addresses
- Database connection issues
- Validation errors

## Models
### User Schema
- name (String, required, 3-50 characters)
- email (String, required, unique, 5-255 characters)
- password (String, required, 5-1024 characters, hashed)

## Contributing
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

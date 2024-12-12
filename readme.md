# Role-Based Access Control (RBAC) Backend

## Overview
This Node.js backend project demonstrates Role-Based Access Control (RBAC) with roles: **Admin**, **Manager**, and **User**. It uses MongoDB for the database and JWT for authentication.

## Features
- User authentication (register/login)
- Secure APIs with JWT
- Role-based access to specific endpoints

## Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud)
- API testing tool like Postman or `curl`

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/Aerin2805/RBAC-From-Scratch.git
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env` file in the root directory:
```env
MONGO_URI=your_mongo_db_url
JWT_SECRET=your_jwt_secret_key
PORT=3000
```
Replace `your_mongo_db_url` with your MongoDB connection string and `your_jwt_secret_key` with a secure key for signing JWTs.

### 4. Start the Server
```bash
npm start
```
The server will run at `http://localhost:3000`.

## API Endpoints

### 1. User Registration
- **Endpoint**: `POST /api/auth/register`
- **Description**: Register a new user
- **Request Body**:
```json
{
  "username": "Aerin Patel",
  "password": "password123",
  "role": "user"
}
```
- **Response**:
```json
{
  "message": "User Registered with username : Aerin Patel"
}
```

### 2. User Login
- **Endpoint**: `POST /api/auth/login`
- **Description**: Log in an existing user
- **Request Body**:
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```
- **Response**:
```json
{
  "token": "your_jwt_token"
}
```

### 3. Get Role-Based User Data
- **Endpoint**: `GET /api/users/:role`
- **Description**: Fetch data based on the role (admin, manager, or user)
- **Authorization**: Bearer Token (JWT)
- **Examples**:
  - `GET /api/users/admin`
  - `GET /api/users/manager`
  - `GET /api/users/user`
- **Headers**:
```json
{
  "Authorization": "Bearer your_jwt_token"
}
```
- **Response Examples**:
  - Admin: 
    ```json
    { "message": "welcome admin" }
    ```
  - Manager:
    ```json
    { "message": "welcome manager" }
    ```
  - User:
    ```json
    { "message": "welcome user" }
    ```

## Testing Instructions
1. Register users with different roles (`admin`, `manager`, `user`) using `POST /api/auth/register`
2. Log in using `POST /api/auth/login` to get a JWT token
3. Test role-based APIs using `GET /api/users/:role` with the JWT token

## Technologies Used
- **Node.js**: Backend runtime
- **Express.js**: Web framework
- **MongoDB**: NoSQL database
- **Mongoose**: ODM for MongoDB
- **JWT**: Authentication mechanism

## Future Enhancements
- Add frontend for user interaction
- Implement password reset functionality
- Add pagination and filtering for user data

## Example `.env` File
```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/rbac
JWT_SECRET=my_super_secret_jwt_key
PORT=3000
```

## Run Tests
Use Postman or any API client:
1. Create a collection for all endpoints
2. Add a `Bearer Token` for endpoints requiring authentication
3. Verify responses for each role

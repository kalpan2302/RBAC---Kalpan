const express = require("express");
const ConnectDB = require("./config/connection");
const dotenv = require("dotenv").config();
const authRoutes = require("./routes/auth.routes")
const userRoutes = require("./routes/user.routes")

const app = express();

//Database Connection
ConnectDB();

//Middlewares
app.use(express.json());


//Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

//server

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
    console.log(`Server start on PORT : ${PORT}`);
})
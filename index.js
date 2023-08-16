const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const app = express();
const authRoutes = require("./routes/authRoutes");
const profileRoutes = require("./routes/profileRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");
const adminServicesRoutes = require('./routes/adminServicesRoutes')

//connect db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB successfully connected"))
  .catch((error) => console.error("Error connecting to DB:", error));

// routes & middlewares
// those two middlewares make req.body accessible, otherwise it would be undefined!!!
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", authRoutes);
app.use("/api", profileRoutes);
app.use("/api", appointmentRoutes);
app.use("/api",adminServicesRoutes)

//start server
app.listen(process.env.PORT, () => console.log("server started successfully"));

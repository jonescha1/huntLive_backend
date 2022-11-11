// DEPENDENCIES
const { Sequelize } = require("sequelize");
const express = require("express");
const app = express();
const usersController = require("./controllers/users_controller");
const eventsController = require("./controllers/events_controller");

// CONFIGURATION / MIDDLEWARE
require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ROOT
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the Tour API",
  });
});

//CONTROLLERS
app.use("/api/users", usersController);
app.use("/api/events", eventsController);

// LISTEN
app.listen(process.env.PORT, () => {
  console.log(`Server started on port: ${process.env.PORT}`);
});

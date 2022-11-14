// DEPENDENCIES
const { Sequelize } = require("sequelize");
const express = require("express");
const app = express();
const usersController = require("./controllers/users_controller");
const eventsController = require("./controllers/events_controller");
const teamsController = require("./controllers/teams_controller");

// CONFIGURATION / MIDDLEWARE
require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ROOT
app.get("/api", (req, res) => {
  res.status(200).json({
    message: "Welcome to the Tour API",
  });
});

//CONTROLLERS
app.use("/api/users", usersController);
app.use("/api/events", eventsController);
app.use("/api/teams", teamsController);

// LISTEN
app.listen(process.env.PORT, () => {
  console.log(`Server started on port: ${process.env.PORT}`);
});

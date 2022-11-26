// DEPENDENCIES
const { Sequelize } = require("sequelize");
const express = require("express");
const app = express();
const cors = require("cors");
const usersController = require("./controllers/users_controller");
const eventsController = require("./controllers/events_controller");
const teamsController = require("./controllers/teams_controller");
const addressesController = require("./controllers/addresses_controller");

// CONFIGURATION / MIDDLEWARE
require("dotenv").config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ROOT
app.get("/api", (req, res) => {
  res.status(200).json({
    message: "Welcome to the Tour API",
  });
});

//CONTROLLERS
app.use("/api/v1/users", usersController);
app.use("/api/v1/addresses", addressesController);
app.use("/api/v1/events", eventsController);
app.use("/api/v1/teams", teamsController);

// 404 Page
app.get("*", (req, res) => {
  res.send("404");
});

// LISTEN
app.listen(process.env.PORT, () => {
  console.log(`Server started on port: ${process.env.PORT}`);
});

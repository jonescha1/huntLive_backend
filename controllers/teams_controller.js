//  DEPENDENCIES
const { Op } = require("sequelize");
const teams = require("express").Router();
// const db = require("../models");
// const { Team } = db;

// SHOW ALL teams
teams.get("/", async (req, res) => {
  res.status(200).json({
    message: "Show all teams",
  });
});

// CREATE NEW TEAM
teams.post("/", async (req, res) => {
  res.status(200).json({
    message: "Create new team",
  });
});

teams
  .route("/:id")
  // SHOW TEAM BY ID
  .get(async (req, res) => {
    res.status(200).json({
      message: `Shows team with id: ${req.params.id}`,
    });
  })
  // UPDATE TEAM BY ID
  .put(async (req, res) => {
    res.status(200).json({
      message: `Update route for team with id: ${req.params.id}`,
    });
  })
  // DELETE TEAM BY ID
  .delete(async (req, res) => {
    res.status(200).json({
      message: `Delete team with id: ${req.params.id}`,
    });
  });

// EXPORT
module.exports = teams;

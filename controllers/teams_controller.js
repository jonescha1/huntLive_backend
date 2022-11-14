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

// SHOW NEW FORM FOR TEAMS
teams.get("/new", async (req, res) => {
  res.status(200).json({
    message: "Shows new form for teams",
  });
});

// CREATE NEW TEAM
teams.post("/", async (req, res) => {
  res.status(200).json({
    message: "Create new team",
  });
});

// SHOW EDIT FORM FOR TEAM
teams.get("/:id/edit", async (req, res) => {
  res.status(200).json({
    message: `Shows edit form for team with id: ${req.params.id}`,
  });
});

// SHOW DELETE FORM FOR TEAM WITH :ID
teams.get("/:id/delete", async (req, res) => {
  res.status(200).json({
    message: `Show delete form for teams with id: ${req.params.id}`,
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

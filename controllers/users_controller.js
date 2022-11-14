//  DEPENDENCIES
const { Op } = require("sequelize");
const users = require("express").Router();
// const db = require("../models");
// const { User } = db;

// SHOW ALL USERS
users.get("/", async (req, res) => {
  res.status(200).json({
    message: "Show all users",
  });
});

// SHOW NEW FORM FOR USERS
users.get("/new", async (req, res) => {
  res.status(200).json({
    message: "Shows new form for users",
  });
});

// CREATE NEW USER
users.post("/", async (req, res) => {
  res.status(200).json({
    message: "Create new user",
  });
});

// SHOW EDIT FORM FOR USER
users.get("/:id/edit", async (req, res) => {
  res.status(200).json({
    message: `Shows edit form for user with id: ${req.params.id}`,
  });
});

// SHOW DELETE FORM FOR USER WITH :ID
users.get("/:id/delete", async (req, res) => {
  res.status(200).json({
    message: `Show delete form for users with id: ${req.params.id}`,
  });
});

users
  .route("/:id")
  // SHOW USER BY ID
  .get(async (req, res) => {
    res.status(200).json({
      message: `Shows user with id: ${req.params.id}`,
    });
  })
  // UPDATE USER BY ID
  .put(async (req, res) => {
    res.status(200).json({
      message: `Update route for user with id: ${req.params.id}`,
    });
  })
  // DELETE USER BY ID
  .delete(async (req, res) => {
    res.status(200).json({
      message: `Delete user with id: ${req.params.id}`,
    });
  });

// EXPORT
module.exports = users;

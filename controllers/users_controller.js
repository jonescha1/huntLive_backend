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

// CREATE NEW USER
users.post("/", async (req, res) => {
  res.status(200).json({
    message: "Create new user",
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

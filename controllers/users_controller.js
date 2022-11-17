//  DEPENDENCIES
const { Op } = require("sequelize");
const users = require("express").Router();
const db = require("../models");
const { User } = db;

// SHOW ALL USERS
users.get("/", async (req, res) => {
  try {
    const foundUsers = await User.findAll();
    res.status(200).json(foundUsers);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE NEW USER
users.post("/", async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(200).json({
      message: "Successfully created a new user",
      data: newUser,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

users
  .route("/:id")
  // SHOW USER BY ID
  .get(async (req, res) => {
    try {
      const foundUser = await User.findOne({
        where: { id: req.params.id },
      });
      res.status(200).json(foundUser);
    } catch (err) {
      res.status(500).json(err);
    }
  })
  // UPDATE USER BY ID
  .put(async (req, res) => {
    try {
      const updateUser = await User.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json({
        message: `Successfully updated user`,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  })
  // DELETE USER BY ID
  .delete(async (req, res) => {
    try {
      const deleteUser = await User.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json({
        message: `Successfully deleted user`,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

// EXPORT
module.exports = users;

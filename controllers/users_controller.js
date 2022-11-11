//  DEPENDENCIES
const { Op } = require("sequelize");
const users = require("express").Router();
const db = require("../models");
const { User } = db;

// GET ALL USERS
users.get("/", async (req, res) => {
  try {
    const foundUsers = await User.findAll();
    res.status(200).json(foundUsers);
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET A SPECIFIC USER
users.get("/:username", async (req, res) => {
  try {
    const foundUser = await User.findOne({
      where: { username: req.params.username },
    });
    res.status(200).json(foundUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

// CREATE A USER
// ***this needs to check and make sure another user doesnt have the same username
// ***validate the needed information has been entered

// UPDATE A USER
// ***make sure a user cant update someone elses profile

// DELETE A USER
// ***make sure a user cant delete someone elses profile

// EXPORT
module.exports = users;

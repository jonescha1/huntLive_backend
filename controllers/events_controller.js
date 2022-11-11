// DEPENDENCIES
const { Op } = require("sequelize");
const events = require("express").Router();
// const db = require("../models");
// const { Event } = db;

// GET ALL EVENTS
events.get("/", async (req, res) => {
  res.status(200).json({
    message: "This is the GET ALL EVENTS ROUTE",
  });
  // try {
  //   const foundEvents = await Event.findAll({
  //     order: [["date", "DES"]],
  //   });
  //   res.status(200).json(foundEvents);
  // } catch (error) {
  //   res.status(500).json(error);
  // }
});

// GET A SPECIFIC EVENT
events.get("/:id", async (req, res) => {
  res.status(200).json({
    message: "This route will get a secific event",
  });
});

// CREATE AN EVENT

// UPDATE AN EVENT (THE EVENT SHOULD BE ONLY BE ABLE TO UPDATE IF THE UPDATE IS MADE BY THE CREATER)

// DELETE AN EVENT (WILL NEED ADMIN RIGHTS TO DELETE AN EVENT THAT IS NOT THE OWNED)

// EXPORT
module.exports = events;

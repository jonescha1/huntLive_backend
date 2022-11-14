// DEPENDENCIES
const { Op } = require("sequelize");
const events = require("express").Router();
// const db = require("../models");
// const { Event } = db;

// SHOW ALL EVENTS
events.get("/", async (req, res) => {
  res.status(200).json({
    message: "Show all events",
  });
});

// SHOW NEW FORM FOR EVENTS
events.get("/new", async (req, res) => {
  res.status(200).json({
    message: "Shows new form for events",
  });
});

// CREATE NEW EVENT
events.post("/", async (req, res) => {
  res.status(200).json({
    message: "Create new event",
  });
});

// SHOW EDIT FORM FOR EVENT
events.get("/:id/edit", async (req, res) => {
  res.status(200).json({
    message: `Shows edit form for event with id: ${req.params.id}`,
  });
});

// SHOW DELETE FORM FOR EVENT WITH :ID
events.get("/:id/delete", async (req, res) => {
  res.status(200).json({
    message: `Show delete form for event with id: ${req.params.id}`,
  });
});

events
  .route("/:id")
  // SHOW EVENT BY ID
  .get(async (req, res) => {
    res.status(200).json({
      message: `Shows event with id: ${req.params.id}`,
    });
  })
  // UPDATE EVENT BY ID
  .put(async (req, res) => {
    res.status(200).json({
      message: `Update route for event with id: ${req.params.id}`,
    });
  })
  // DELETE EVENT BY ID
  .delete(async (req, res) => {
    res.status(200).json({
      message: `Delete event with id: ${req.params.id}`,
    });
  });

// EXPORT
module.exports = events;

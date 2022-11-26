//DEPENDENCIES
// const { Op } = require("sequelize");
const addresses = require("express").Router();
const db = require("../models");
const { Address } = db;

// GET ALL ADDRESSES
addresses.get("/", async (req, res) => {
  try {
    const foundAddresses = await Address.findAll();
    res.status(200).json(foundAddresses);
  } catch (err) {
    res.status(500).json(err);
  }
});

// EXPORT
module.exports = addresses;

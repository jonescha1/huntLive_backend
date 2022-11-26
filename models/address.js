"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define("Address", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    zipcode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Address.associate = ({ Profile }) => {
    Address.hasMany(Profile);
  };

  return Address;
};

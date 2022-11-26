"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const Image_File = sequelize.define("Image_File", {
    filename: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    filepath: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mimetype: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    size: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
  });

  Image_File.associate = ({ Profile }) => {
    Image_File.belongsTo(Profile);
  };

  return Image_File;
};

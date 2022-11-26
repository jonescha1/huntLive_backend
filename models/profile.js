"use strict";
module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define("Profile", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date_of_birth: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  });

  Profile.associate = ({ User, Address, Image_File }) => {
    Profile.belongsTo(User);
    Profile.belongsTo(Address);
    Profile.hasMany(Image_File);
  };

  return Profile;
};

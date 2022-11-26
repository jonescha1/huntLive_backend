"use strict";

module.exports = (sequelize, DataTypes) => {
  const User_Address = sequelize.define("User_Address", {});

  User_Address.associate = ({ Profile, Address }) => {
    Profile.belongsToMany(Address, { through: User_Address });
    Address.belongsToMany(Profile, { through: User_Address });
  };

  return User_Address;
};

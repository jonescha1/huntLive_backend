"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Activity_Event extends Model {}
  Activity_Event.init(
    {
      activity_event_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      host: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      about: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      start_time: {
        type: DataTypes.DATE,
        allowNull: false,
      },

      end_time: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Activity_Event",
      tableName: "activity_events",
      timestamps: false,
    }
  );
  return Activity_Event;
};

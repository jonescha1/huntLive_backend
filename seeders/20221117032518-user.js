"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          username: "user1",
          password_hash: "password1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "user2",
          password_hash: "password2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "user3",
          password_hash: "password3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "user4",
          password_hash: "password4",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "user5",
          password_hash: "password5",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};

"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Profiles", "UserId", {
      type: Sequelize.INTEGER,
      references: {
        model: "Users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });

    await queryInterface.addColumn("Profiles", "AddressId", {
      type: Sequelize.INTEGER,
      references: {
        model: "Addresses",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });

    await queryInterface.addColumn("Image_Files", "ProfileId", {
      type: Sequelize.INTEGER,
      references: {
        model: "Profiles",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Profiles", "UserId");
    await queryInterface.removeColumn("Profiles", "AddressId");
    await queryInterface.removeColumn("Image_Files", "ProfileId");
  },
};

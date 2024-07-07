'use strict';
const DataTypes = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("blogs", {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      blog:{
        allowNull: false,
        type: DataTypes.STRING
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("blogs")
  }
};

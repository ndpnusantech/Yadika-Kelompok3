"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("kamars", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      type_kamar: {
        type: Sequelize.STRING,
      },
      fasilitas_kamar: {
        type: Sequelize.STRING,
      },
      id_kasurKamar: {
        type: Sequelize.INTEGER,
      },
      deskripsi_kamar: {
        type: Sequelize.TEXT,
      },
      status_kamar: {
        type: Sequelize.STRING,
      },
      image_kamar: {
        type: Sequelize.STRING,
      },
      url_image: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("kamars");
  },
};

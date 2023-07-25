"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class kamar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  kamar.init(
    {
      type_kamar: DataTypes.STRING,
      fasilitas_kamar: DataTypes.STRING,
      id_kasurKamar: DataTypes.INTEGER,
      deskripsi_kamar: DataTypes.TEXT,
      status_kamar: DataTypes.STRING,
      image_kamar: DataTypes.STRING,
      url_image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "kamar",
    }
  );
  return kamar;
};

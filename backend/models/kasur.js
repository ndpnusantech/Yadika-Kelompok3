'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class kasur extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  kasur.init({
    nama_kasur: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'kasur',
  });
  return kasur;
};
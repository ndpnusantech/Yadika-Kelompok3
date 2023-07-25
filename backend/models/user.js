'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    username: DataTypes.STRING,
    user_email: DataTypes.STRING,
    user_password: DataTypes.TEXT,
    user_noHp: DataTypes.INTEGER,
    user_nik: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
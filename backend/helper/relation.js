const sequelize = require("../models/index.js").sequelize;
const { DataTypes } = require("sequelize");

const Kamar = require("../models/kamarModel.js")(sequelize, DataTypes);
const Kasur = require("../models/kasur.js")(sequelize, DataTypes);
const User = require("../models/user.js")(sequelize, DataTypes);

module.exports = { Kamar, Kasur, User };

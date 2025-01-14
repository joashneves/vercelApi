'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Franquia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Franquia.init({
    Name: DataTypes.STRING,
    Description: DataTypes.TEXT,
    creator: DataTypes.STRING,
    attachment: DataTypes.STRING,
    Data_Published: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Franquia',
  });
  return Franquia;
};
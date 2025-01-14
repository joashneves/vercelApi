'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Personagens extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Personagens.init({
    id_franquia: DataTypes.INTEGER,
    Name: DataTypes.STRING,
    Description: DataTypes.TEXT,
    Gender: DataTypes.ENUM,
    Caminho_Arquivo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Personagens',
  });
  return Personagens;
};
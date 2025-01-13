'use strict';

const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Franquia extends Model {}

  Franquia.init(
    {
      Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      Name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Description: {
        type: DataTypes.TEXT, // Usado TEXT para descrições longas
        allowNull: true,
      },
      Creator: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Attachment: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Data_Published: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Franquia',
      tableName: 'Franquias', // Nome da tabela no banco
    }
  );

  return Franquia;
};

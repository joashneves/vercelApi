'use strict';

const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Personagem extends Model {
    static associate(models){
        Personagem.belongsTo(models.Franquia, {
            foreignKey: 'categoria_id'
        });
    }
  }

  Personagem.init(
    {
      Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      Id_Franquia: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Gender: {
        type: DataTypes.ENUM('Feminino', 'Masculino', 'NaoBinario', 'Fluido', 'Outros'),
        allowNull: false,
      },
      CaminhoArquivo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Personagem',
      tableName: 'Personagens', // Nome da tabela no banco
    }
  );

  return Personagem;
};

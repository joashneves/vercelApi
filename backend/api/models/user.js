'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        // Nenhum construtor necessário, Model do Sequelize não precisa dele para funcionar
    }
    // Configuração do init fora do corpo da classe
    User.init(
        {
            Name: DataTypes.STRING,
            UserName: DataTypes.STRING,
            Password: DataTypes.STRING,
            Email: DataTypes.STRING,
            Nivel: DataTypes.INTEGER // Corrigido de NUMBER para INTEGER
        },
        {
            sequelize,
            modelName: 'User',
            tableName: 'Users'
        }
    );
    return User;
};

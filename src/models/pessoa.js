'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pessoa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pessoa.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        primaryKey: true,
      },
      apelido: {
        type: DataTypes.STRING(32),
        allowNull: false,
        unique: true,
      },
      nome: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      nascimento: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      stack: {
        type: DataTypes.JSON,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'Pessoa',
      tableName: 'pessoas',
      timestamps: true,
      paranoid: true,
      underscored: true,
    }
  );
  return Pessoa;
};
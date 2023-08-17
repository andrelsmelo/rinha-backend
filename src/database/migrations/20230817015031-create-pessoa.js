'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pessoas', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      apelido: {
        type: Sequelize.STRING(32),
        allowNull: false,
        unique: true,
      },
      nome: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      nascimento: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      stack: {
        type: Sequelize.STRING,
        allowNull: false,
        get() {
            return this.getDataValue('stack').split(';')
        },
        set(val) {
           this.setDataValue('stack',val.join(';'));
        },
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('pessoas');
  }
};
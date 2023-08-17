'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('pessoas', [
      {
        apelido: 'usuario1',
        nome: 'Usuário 1',
        nascimento: '1990-01-01',
        stack: 'Node.js , Express',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        apelido: 'usuario2',
        nome: 'Usuário 2',
        nascimento: '1995-05-05',
        stack: 'React , Redux',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('usuarios', null, {});
  },
};

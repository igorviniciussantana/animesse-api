'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('statuses', [
      {nome: 'Disponível'},
      {nome: 'Vendido'},
      {nome: 'Indisponível'}
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('statuses', null, {});
  }
};

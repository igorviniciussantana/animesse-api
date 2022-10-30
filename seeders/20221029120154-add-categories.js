'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categorias', [
      {nome: 'Brinco'},
      {nome: 'Tiara'},
      {nome: 'Colar'}
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categorias', null, {});
  }
};

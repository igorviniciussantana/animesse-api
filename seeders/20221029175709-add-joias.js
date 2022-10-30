"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "joias",
      [
        {
          nome: "Colar Cravejado com pérolas",
          descricao: "colar cravejado muito lindo feito com pérolas",
          preco: 19.90,
          categoriaId: 2,
          statusId: 1
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("joias", null, {});
  },
};

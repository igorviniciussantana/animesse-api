'use strict';

module.exports = {
  async up (queryInterface, DataTypes) {
    await queryInterface.addColumn('joias', 'descricao', {
      allowNull: false,
      type: DataTypes.STRING
    });
    await queryInterface.addColumn('joias', 'preco', {
      allowNull: false,
      type: DataTypes.FLOAT,
    });
    await queryInterface.addColumn('joias', 'visitas', {
      allowNull: false,
      type: DataTypes.INTEGER,
      defaultValue: 0
    });
    await queryInterface.addColumn('joias', 'parcelas', {
      allowNull: false,
      type: DataTypes.INTEGER,
      defaultValue: 0
    });
    await queryInterface.addColumn('joias', 'promo', {
      allowNull: false,
      type: DataTypes.INTEGER,
      defaultValue: 0
    });
    await queryInterface.addColumn('joias', 'categoriaId', {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "categorias",
        key: "id",
      },
    });

  },

  async down (queryInterface) {
    await queryInterface.removeColumn('joias', 'descricao');
    await queryInterface.removeColumn('joias', 'preco');
    await queryInterface.removeColumn('joias', 'visitas');
    await queryInterface.removeColumn('joias', 'parcelas');
    await queryInterface.removeColumn('joias', 'promo');
    await queryInterface.removeColumn('joias', 'categoriaId');

  }
};

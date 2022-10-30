'use strict';

module.exports = {
  async up (queryInterface, DataTypes) {
    await queryInterface.addColumn('joias', 'statusId', {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "statuses",
        key: "id",
      },
    });

  },

  async down (queryInterface) {
    await queryInterface.removeColumn('joias', 'statusId');

  }
};

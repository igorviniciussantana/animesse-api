'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class categorias extends Model {
    static associate(models) {
      this.hasMany(models.joias, {as: "joias"})
    }
  }
  categorias.init({
    nome: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'categorias',
  });
  return categorias;
};
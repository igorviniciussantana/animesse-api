'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class joias extends Model {

    static associate(models) {
      this.belongsTo(models.categorias),
      this.belongsTo(models.status)
    }
  }
  joias.init({
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
    preco: DataTypes.FLOAT,
    visitas: DataTypes.INTEGER,
    parcelas: DataTypes.INTEGER,
    promo: DataTypes.INTEGER,

  }, 
  
  
  {
    sequelize,
    modelName: 'joias',
  });
  return joias;
};
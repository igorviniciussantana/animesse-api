module.exports = (sequelize, DataTypes) => {
  const table_name = "establishments";
  const model_name = "Establishment";

  const Establishment = sequelize.define(table_name, {
    nome: {
      type: DataTypes.STRING,
    },
    descricao: {
      type: DataTypes.STRING,
    },
    preco: {
      type: DataTypes.NUMBER,
    },
    visitas: {
      type: DataTypes.INTEGER,
    },
    parcelas: {
      type: DataTypes.INTEGER,
    },
    promo: {
      type: DataTypes.INTEGER,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "categories",
        key: "id",
      },
    },
  });

  Establishment.associate = function (models) {
    Establishment.belongsTo(models.Category, { as: "category" });
  };

  Establishment.model_name = function () {
    return model_name;
  };

  return Establishment;
};

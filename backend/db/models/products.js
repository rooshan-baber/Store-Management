const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");
const Category = require('./category');

const Products = sequelize.define(
  "Products",
  {
    PID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    Pcode: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    Pname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    Pprice: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    Pcat: {
      type: DataTypes.INTEGER, // You can use DataTypes.STRING if needed
      allowNull: false,
      references: {
        model: Category, // Referencing the Category model
        key: 'Ccode' // Referencing the Ccode column in the Category model
      }
  } 
  },
  {
    tableName: "products",
    timestamps: false,
  }
);


module.exports = Products;

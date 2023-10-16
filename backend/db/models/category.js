const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');
const Category = sequelize.define(
  'Category',
  {
    Ccode:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      validate: {
        notEmpty: true
      }
    },
    Cname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  },
  {
    tableName: 'category',
    timestamps: false,
  }
);
module.exports = Category;
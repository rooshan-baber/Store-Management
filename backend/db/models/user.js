const {DataTypes } = require("sequelize");
const sequelize = require('../config/config');

const User = sequelize.define("User", {
  user_id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique : true,      
    validate: {
      notEmpty: true
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true
    }},
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    },  
  },
  token: {
    type: DataTypes.STRING
  }
  },
  {
    freezeTableName : true,      // keeps the table name as it is
    timestamps: false            // Doesnot add the createdAt & updatedAt columns
  });


module.exports = User;
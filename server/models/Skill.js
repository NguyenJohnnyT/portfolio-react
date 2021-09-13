const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Skill extends Model {};

Skill.init(
  {
    id: {
      type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }
)
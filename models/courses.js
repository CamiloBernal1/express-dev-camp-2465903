'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Courses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Courses.init({
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "No debe estar vacio"
        }},
      },
    description: {
    type: DataTypes.STRING,
    validate: {
      notEmpty: {
        args: true,
        msg: "No debe estar vacio"
      }}
    },
    weeks:{
      type: DataTypes.INTEGER,
      validate:{
        isNumeric: {
          args: true,
          msg: "Solo se requieren numeros"
        }
      },
      max: {
        args: 1,
        msg: "Semana maximo de 1 semanas"
      },
      min: {
        args: 9,
        msg: "Numero de semanas menor a 9"
      },
      notEmpty: {
        args: true,
        msg: "No debe estar vacio"
      }
    }, 
    enroll_cost:{
      type: DataTypes.REAL,
      validate:{
        isFloat: {
          args: true,
          msg: "Solo se requieren numeros",
        }
      },
    },
    minimun_skill:{
      type: DataTypes.STRING,
      validate: {
        isAlpha: {
          args: true,
          msg: 'solo se requieren letras',
        }
      }
    },
    bootcamp_id: DataTypes.INTEGER
  }, {
    sequelize,
    timestamps: false,
    modelName: 'Courses',
  });
  return Courses;
};
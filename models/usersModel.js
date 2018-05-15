'use strict';
module.exports = (sequelize, DataTypes) => {
  var Users = sequelize.define('Users', {
    email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    username: { 
        type: DataTypes.STRING,
        allowNull: true,
    },
    fname: {
        type: DataTypes.STRING,
        allowNull: true
    },
    imgUser: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    lname: {
        type: DataTypes.STRING,
        allowNull: true
    },
    nickname: {
        type: DataTypes.STRING,
        allowNull: true
    },
    quote: {
        type: DataTypes.STRING,
        allowNull: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: true
    },
    telphone:{
        type: DataTypes.STRING,
        allowNull: true
    },
    birthdate:{
        type:DataTypes.DATE,
        allowNull: true
    },
    company:{
        type: DataTypes.STRING,
        allowNull: true
    },
    department:{
        type: DataTypes.STRING,
        allowNull: true
    },
    position: {
        type: DataTypes.STRING,
        allowNull: true
    },
    workstart: {
        type: DataTypes.DATE,
        allowNull: true
    },
    workend: {
        type: DataTypes.DATE,
        allowNull: true
    },
    emergencyName: {
        type: DataTypes.STRING,
        allowNull: true
    },
    emergencyRelation: {
        type: DataTypes.STRING,
        allowNull: true
    },
    emergencyTel:{
        type: DataTypes.STRING,
        allowNull: true
    },
    userRoles: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
  }, {});

  return Users;
};
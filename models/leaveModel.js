'use strict';
module.exports = (sequelize, DataTypes) => {
  
  var Leave = sequelize.define('Leave', {
    dateStartLeave: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dateEndLeave: {
      type: DataTypes.DATE,
      allowNull: true
    },
    remark: {
      type: DataTypes.TEXT,
      allowNull: true
    },
  }, {});
  
  return Leave;
};
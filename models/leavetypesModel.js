'use strict';
module.exports = (sequelize, DataTypes) => {
  var LeaveTypes = sequelize.define('LeaveTypes', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    leave_type_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    work_age: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    holiday_days: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    remark: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {});

  return LeaveTypes;
};
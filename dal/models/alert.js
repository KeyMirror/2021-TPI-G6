'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Alert extends Model {
     
    static associate(models) {
      Alert.belongsTo(models.Notification);
    }
  };
  Alert.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    date: DataTypes.DATEONLY,
  }, {
    sequelize,
    modelName: 'Alert',
  });
  return Alert;
};
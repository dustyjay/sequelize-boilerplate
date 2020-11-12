'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Services extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Services.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING(1000),
    },
    {
      sequelize,
      modelName: 'Services',
    }
  );
  return Services;
};

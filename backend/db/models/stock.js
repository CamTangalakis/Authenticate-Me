'use strict';
module.exports = (sequelize, DataTypes) => {
  const Stock = sequelize.define('Stock', {
    dispensaryId: DataTypes.INTEGER,
    strainId: DataTypes.INTEGER
  }, {});
  Stock.associate = function(models) {
    // associations can be defined here
  };
  return Stock;
};
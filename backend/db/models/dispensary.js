'use strict';
module.exports = (sequelize, DataTypes) => {
  const Dispensary = sequelize.define('Dispensary', {
    ownerId: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {});
  Dispensary.associate = function(models) {
    // associations can be defined here
  };
  return Dispensary;
};
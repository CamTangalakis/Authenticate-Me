'use strict';
module.exports = (sequelize, DataTypes) => {
  const Checkin = sequelize.define('Checkin', {
    userId: DataTypes.INTEGER,
    strainId: DataTypes.INTEGER
  }, {});
  Checkin.associate = function(models) {
    // associations can be defined here
  };
  return Checkin;
};
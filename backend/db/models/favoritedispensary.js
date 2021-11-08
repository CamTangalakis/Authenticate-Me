'use strict';
module.exports = (sequelize, DataTypes) => {
  const FavoriteDispensary = sequelize.define('FavoriteDispensary', {
    userId: DataTypes.INTEGER,
    dispensaryId: DataTypes.INTEGER
  }, {});
  FavoriteDispensary.associate = function(models) {
    // associations can be defined here
  };
  return FavoriteDispensary;
};
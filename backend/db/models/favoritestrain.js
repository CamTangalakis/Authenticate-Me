'use strict';
module.exports = (sequelize, DataTypes) => {
  const FavoriteStrain = sequelize.define('FavoriteStrain', {
    userId: DataTypes.INTEGER,
    strainId: DataTypes.INTEGER
  }, {});
  FavoriteStrain.associate = function(models) {
    // associations can be defined here
  };
  return FavoriteStrain;
};
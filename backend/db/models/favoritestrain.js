'use strict';
module.exports = (sequelize, DataTypes) => {
  const FavoriteStrain = sequelize.define('FavoriteStrain', {
    userId: DataTypes.INTEGER,
    strainId: DataTypes.INTEGER
  }, {});
  FavoriteStrain.associate = function(models) {
    FavoriteStrain.belongsTo(models.User, {foreignKey: userId})
    FavoriteStrain.belongsTo(models.Strain, {foreignKey: strainId})
  };
  return FavoriteStrain;
};

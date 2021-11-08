'use strict';
module.exports = (sequelize, DataTypes) => {
  const FavoriteDispensary = sequelize.define('FavoriteDispensary', {
    userId: DataTypes.INTEGER,
    dispensaryId: DataTypes.INTEGER
  }, {});
  FavoriteDispensary.associate = function(models) {
    FavoriteDispensary.belongsTo(models.User, {foreignKey: 'userId'})
    FavoriteDispensary.belongsTo(models.Dispensary, {foreignKey: 'dispensaryId'})
  };
  return FavoriteDispensary;
};

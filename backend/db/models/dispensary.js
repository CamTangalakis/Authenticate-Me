'use strict';
module.exports = (sequelize, DataTypes) => {
  const Dispensary = sequelize.define('Dispensary', {
    ownerId: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {});
  Dispensary.associate = function(models) {
    Dispensary.hasMany(models.FavoriteDispensary, {foreignKey: 'dispensaryId'})
    // Dispensary.hasMany(models.Strain, {foreignKey: 'strainId'})
    Dispensary.belongsTo(models.User, {foreignKey: 'ownerId'})
  };
  return Dispensary;
};

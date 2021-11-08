'use strict';
module.exports = (sequelize, DataTypes) => {
  const Strain = sequelize.define('Strain', {
    name: DataTypes.STRING,
    strain: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});
  Strain.associate = function(models) {
    Strain.hasMany(models.FavoriteStrain, {foreignKey: 'strainId'})
    Strain.hasMany(models.Checkin, {foreignKey: 'strainId'})
  };
  return Strain;
};

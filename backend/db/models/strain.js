'use strict';
module.exports = (sequelize, DataTypes) => {
  const Strain = sequelize.define('Strain', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    strainType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "https://www.cannabisbusinesstimes.com/fileuploads/publications/38/issues/103722/articles/images/heliojack.jpg?w=736&h=414&mode=crop"
    },
    brand: {
      type: DataTypes.STRING,
    }
  }, {});
  Strain.associate = function(models) {
    Strain.hasMany(models.FavoriteStrain, {foreignKey: 'strainId'})
    Strain.hasMany(models.Checkin, {foreignKey: 'strainId'})
  };
  return Strain;
};

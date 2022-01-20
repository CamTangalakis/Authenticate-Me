'use strict';
module.exports = (sequelize, DataTypes) => {
  const Dispensary = sequelize.define('Dispensary', {
    ownerId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING(1000)
    },
    coverPhoto: {
      type: DataTypes.STRING,
      defaultValue: "https://www.conservationmagazine.org/wp-content/uploads/2010/12/green-cross.jpg"
    }
  }, {});
  Dispensary.associate = function(models) {
    Dispensary.hasMany(models.FavoriteDispensary, {foreignKey: 'dispensaryId'})
    // Dispensary.hasMany(models.Strain, {foreignKey: 'strainId'})
    Dispensary.belongsTo(models.User, {foreignKey: 'ownerId'})
  };
  return Dispensary;
};

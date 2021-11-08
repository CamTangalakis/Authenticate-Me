'use strict';
module.exports = (sequelize, DataTypes) => {
  const Checkin = sequelize.define('Checkin', {
    userId: DataTypes.INTEGER,
    strainId: DataTypes.INTEGER,
    text: DataTypes.TEXT
  }, {});
  Checkin.associate = function(models) {
    Checkin.hasMany(models.Comment, {foreignKey: 'checkinId'})
    Checkin.belongsTo(models.User, {foreignKey: 'userId'})
    Checkin.belongsTo(models.Strain, {foreignKey: 'strainId'})
  };
  return Checkin;
};

'use strict';
module.exports = (sequelize, DataTypes) => {
  const Rating = sequelize.define('Rating', {
    strainId: DataTypes.INTEGER,
    rating: DataTypes.INTEGER
  }, {});
  Rating.associate = function(models) {
    Rating.belongsTo(models.Strain, {foreignKey: 'strainId'})
  };
  return Rating;
};

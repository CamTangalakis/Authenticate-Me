'use strict';
module.exports = (sequelize, DataTypes) => {
  const Strain = sequelize.define('Strain', {
    name: DataTypes.STRING,
    strain: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});
  Strain.associate = function(models) {
    // associations can be defined here
  };
  return Strain;
};
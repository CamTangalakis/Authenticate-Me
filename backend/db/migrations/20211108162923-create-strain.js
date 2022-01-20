'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Strains', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(50),
        unique: true
      },
      strainType: {
        allowNull: false,
        type: Sequelize.STRING(15)
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING
      },
      photo: {
        allowNull: false,
        type: Sequelize.STRING
      },
      brand: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Strains');
  }
};

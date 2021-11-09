'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Dispensaries', [
     {name: 'High Life Dispensary', ownerId: 7, createdAt: new Date(), updatedAt: new Date()},
     {name: 'Over the Moon', ownerId: 7, createdAt: new Date(), updatedAt: new Date()},
     {name: 'Green Acres Health Clinic', ownerId: 4 , createdAt: new Date(), updatedAt: new Date()},
     {name: 'Better Living', ownerId: 3 , createdAt: new Date(), updatedAt: new Date()},
     {name: 'Green Thumb Sanctuary', ownerId: 1, createdAt: new Date(), updatedAt: new Date()},
   ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Dispensaries', null, {});
  }
};

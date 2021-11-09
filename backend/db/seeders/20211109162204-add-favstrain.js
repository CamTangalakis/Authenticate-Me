'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('FavoriteStrains', [
     {userId: 1, strainId: 6, createdAt: new Date(), updatedAt: new Date()},
     {userId: 1, strainId: 2, createdAt: new Date(), updatedAt: new Date()},
     {userId: 1, strainId: 8, createdAt: new Date(), updatedAt: new Date()},
     {userId: 2, strainId: 8, createdAt: new Date(), updatedAt: new Date()},
     {userId: 3, strainId: 4, createdAt: new Date(), updatedAt: new Date()},
     {userId: 3, strainId: 10, createdAt: new Date(), updatedAt: new Date()},
     {userId: 6, strainId: 11, createdAt: new Date(), updatedAt: new Date()},
     {userId: 7, strainId: 5, createdAt: new Date(), updatedAt: new Date()},
     {userId: 8, strainId: 5, createdAt: new Date(), updatedAt: new Date()},
     {userId: 8, strainId: 8, createdAt: new Date(), updatedAt: new Date()},
     {userId: 7, strainId: 2, createdAt: new Date(), updatedAt: new Date()},
     {userId: 7, strainId: 1, createdAt: new Date(), updatedAt: new Date()},
     {userId: 7, strainId: 9, createdAt: new Date(), updatedAt: new Date()},
   ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('FavoriteStrains', null, {});
  }
};

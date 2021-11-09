'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('FavoriteDispensaries', [
     {userId: 7, dispensaryId: 1, createdAt: new Date(), updatedAt: new Date()},
     {userId: 7, dispensaryId: 2, createdAt: new Date(), updatedAt: new Date()},
     {userId: 7, dispensaryId: 3, createdAt: new Date(), updatedAt: new Date()},
     {userId: 3, dispensaryId: 4, createdAt: new Date(), updatedAt: new Date()},
     {userId: 8, dispensaryId: 5, createdAt: new Date(), updatedAt: new Date()},
     {userId: 1, dispensaryId: 1, createdAt: new Date(), updatedAt: new Date()},
     {userId: 1, dispensaryId: 5, createdAt: new Date(), updatedAt: new Date()},
     {userId: 4, dispensaryId: 3, createdAt: new Date(), updatedAt: new Date()},
   ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('FavoriteDispensaries', null, {});
  }
};

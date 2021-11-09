'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Comments', [
     {userId: 1, checkinId: 4, comment: 'I love this song!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 1, checkinId: 5, comment: 'This strain is amazing!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 1, checkinId: 8, comment: 'I went to get this from my dispensary and they were all out. I gotta try it next time they have some.', createdAt: new Date(), updatedAt: new Date()},
     {userId: 3, checkinId: 13, comment: 'All I want to do it have some of this kush in my body.', createdAt: new Date(), updatedAt: new Date()},
     {userId: 4, checkinId: 3, comment: 'I loved that movie!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 7, checkinId: 3, comment: 'Seth Rogan owns my whole heart. And both of my lungs.', createdAt: new Date(), updatedAt: new Date()},
     {userId: 7, checkinId: 8, comment: 'I did, come to my house and do something about it.', createdAt: new Date(), updatedAt: new Date()},
     {userId: 7, checkinId: 6, comment: 'Gonna ride till i can\'t no more', createdAt: new Date(), updatedAt: new Date()},
     {userId: 8, checkinId: 10, comment: 'but your face is still standing', createdAt: new Date(), updatedAt: new Date()},
     {userId: 4, checkinId: 12, comment: 'If your life was so fragile to begin with, it ain\'t the weed\'s fault.', createdAt: new Date(), updatedAt: new Date()},
     {userId: 3, checkinId: 11, comment: 'I was so high on my wedding day that I kissed the wrong person. You aren\'t supposed to wear white to weddings for this reason!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 5, checkinId: 15, comment: 'Gonna get so high...', createdAt: new Date(), updatedAt: new Date()},
     {userId: 5, checkinId: 2, comment: 'I feel like Snoop whenever I smoke this weed :)', createdAt: new Date(), updatedAt: new Date()},
   ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Comments', null, {});
  }
};

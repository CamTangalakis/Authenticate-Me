'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Checkins', [
     {userId: 1, strainId: 1, text:'Just smoked Starry Nights for the first time, and had the coolest visual effects. Maybe I smoked too much.', createdAt: new Date(), updatedAt: new Date()},
     {userId: 1, strainId: 2, text:'OG Kush is the OG!!! Keeping it real in SacTown with this crazy cool strain from Green Acres Health Clinic. The boys keep me stocked up and ready to party!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 1, strainId: 3, text:'Pineapple Express was my favorite movie as a teen. Now it\'s my favorite strain. Seth Rogan knows his stuff.', createdAt: new Date(), updatedAt: new Date()},
     {userId: 2, strainId: 4, text:'Got me dreamin like bluuuuue dreaeaaaamms.', createdAt: new Date(), updatedAt: new Date()},
     {userId: 2, strainId: 5, text:'This is my favorite weed i\'ve ever had. Sweet and citrusy, and it kept coming back for more.', createdAt: new Date(), updatedAt: new Date()},
     {userId: 2, strainId: 6, text:'This sh*t got me in a haze. I want more.', createdAt: new Date(), updatedAt: new Date()},
     {userId: 2, strainId: 7, text:'These mints aren\'t very minty :/', createdAt: new Date(), updatedAt: new Date()},
     {userId: 3, strainId: 8, text:'I want to know who blended this strain and I want to kiss them square on the mouth.', createdAt: new Date(), updatedAt: new Date()},
     {userId: 4, strainId: 9, text:'I want to say I liked this, but it was way too gassy for me.', createdAt: new Date(), updatedAt: new Date()},
     {userId: 4, strainId: 10, text:'shot in the face. shot, shot in the face. by these dank nuggs', createdAt: new Date(), updatedAt: new Date()},
     {userId: 4, strainId: 11, text:'I want to get married while high on this strain. got me seeing stars. never seen anything more beautiful.', createdAt: new Date(), updatedAt: new Date()},
     {userId: 4, strainId: 12, text:'You know that feeling when you know you\'ve smelled a smell before. I smelled this weed when I was a kid at school, and didn\'t know what weed was. Sense memory brought by back.', createdAt: new Date(), updatedAt: new Date()},
     {userId: 5, strainId: 13, text:'These cookie monsters gave me the worst munchies i\'ve ever had, but i can\'t stop smoking!!!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 5, strainId: 12, text:'This little green monster is going to destroy my life. I love him so much :\')', createdAt: new Date(), updatedAt: new Date()},
     {userId: 6, strainId: 11, text:'The wedding bells are really ringing whenever I smoke this guy. I rolled the best joint with it, and now nothing I ever do will compare.', createdAt: new Date(), updatedAt: new Date()},
     {userId: 6, strainId: 13, text:'I watched seasame street as a kid but I didn\'t know cookie monster smoked', createdAt: new Date(), updatedAt: new Date()},
     {userId: 7, strainId: 5, text:'The citrusy lemon flavor is so much better than I though it\'d be. You should try this strain as soon as you can!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 7, strainId: 6, text:'When I think of good weed, this is what I think of', createdAt: new Date(), updatedAt: new Date()},
     {userId: 7, strainId: 9, text:'This strain sucks.', createdAt: new Date(), updatedAt: new Date()},
     {userId: 7, strainId: 3, text:'I\'m never going to this dispensary again, they treated me like i didn\'t know what I was doing.', createdAt: new Date(), updatedAt: new Date()},

   ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Checkins', null, {});
  }
};

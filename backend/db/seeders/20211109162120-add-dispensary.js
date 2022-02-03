'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Dispensaries', [
     {name: 'High Life Dispensary', ownerId: 7, location: 'San Francisco, California', phone: '(542)654-6584', email: 'high.life@sf.com', description: 'Living the High Life! We specialize in top-shelf and pungent little nuggs of goodness, delivered straight to your bong with high speed and accuracy. Never leave your vape unattended, we will fill it with good juice and smoke a bowl with your grandmother. Love to live, laugh, and smoke a whole bunch.', coverPhoto: 'https://weedmaps.com/learn/wp-content/uploads/2020/12/151111B_31117_FTS_009-e1515050708440.jpg', createdAt: new Date(), updatedAt: new Date()},
     {name: 'Over the Moon', ownerId: 7, location: 'Little Rock, Colorado', phone: '(568)943-9725', email: 'highlife@gmail.com', description: 'We\'re over the moon to introduce you to the best wee you\'ll ever have in your life. We\'re not exaggerating. This stuff is so good you\'ll convert all your straight edge neighbors and family members. Party at your house when they smell this dank kush we got going on for you.', coverPhoto: 'https://thecannabisindustry.org/wp-content/uploads/2017/05/HighRoadDesign_LEVELU07.jpg', createdAt: new Date(), updatedAt: new Date()},
     {name: 'Green Acres Health Clinic', ownerId: 4 , location: 'Green Acres, New York', phone: '(944)648-9761', email: 'thisemail@email.com', description: 'We are your go to for all your cannabic, thc, and cbd needs! Any ache or pain you have will dissolve under our innovative new creams, tonics, edibles, and more! Never feel anythingn ever again if you don\'t want to! Waste away in our back room where all the stoners and drug addicts go to get their fix. But like family friendly.', coverPhoto: 'https://3ncb884ou5e49t9eb3fpeur1-wpengine.netdna-ssl.com/wp-content/uploads/2018/07/best-dispensaries-east-bay-featured-800x500.jpg', createdAt: new Date(), updatedAt: new Date()},
     {name: 'Better Living', ownerId: 3 , location: 'Goldberg, Washington', phone: '(946)358-3168', email: 'email@email.com', description: 'We\'re all about living good and smoking better here at Better Living Dispensary. If you\'re too cold to go outside, or just too depressed, our family members will come to your house and hotbox you for free, just because we care. Get fresh and pungent weed delivered straight to your door, or pay more to have it delivered straight to you mouth.', coverPhoto: 'https://www.jetsetter.com//uploads/sites/7/2019/04/PHOTO-CREDIT-LINCOLN-BARBOUR-1-1380x1035.jpg', createdAt: new Date(), updatedAt: new Date()},
     {name: 'Green Thumb Sanctuary', ownerId: 1, location: 'Portland, Oregon', phone: '(648)316-1348', email: 'portland@oregon.com', description: 'As good as it gets, if not better! We\'re the premiere dispensary in Oregon, varified by over three people who have walked in our store since we opened. Trust them, they know weed. We love weed. We will sell you weed if you give us money, or other things that we want. We are professionals.', coverPhoto: 'https://assets3.thrillist.com/v1/image/2965527/828x620/crop;webp=auto;jpeg_quality=60;progressive.jpg', createdAt: new Date(), updatedAt: new Date()},
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

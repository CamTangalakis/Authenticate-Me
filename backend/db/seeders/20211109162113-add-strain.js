'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Strains', [
     {name: 'Blender', strain: 'hybrid', description: 'You\'ve never had weed like this! A unique blend of OG Kush and Girl Scout Cookies, this energizing blend will have you giggling until your neighbors call the cops on you.', createdAt: new Date(), updatedAt: new Date()},
     {name: 'Starry Nights', strain: 'indica', description: 'This trippy blend will have you seeing stars as it puts you to sleep. Super relaxing and mildly gassy, it will sing you off to a peaceful slumber.', createdAt: new Date(), updatedAt: new Date()},
     {name: 'OG Kush', strain: 'hybrid', description: 'OG Kush is a world famous blend popularized in Los Angeles for its heavy and euphoric high. It will leave you feelin relaxed, happy, and giggly, with strong earthy and citrus flavors.', createdAt: new Date(), updatedAt: new Date()},
     {name: 'Pineapple Express', strain: 'hybrid', description: 'The dopest dope. The perfect child of Trainwreck and Hawaiian will have you hopping the express train to a happy, uplifted high.', createdAt: new Date(), updatedAt: new Date()},
     {name: 'Blue Dream', strain: 'indica', description: 'Good night, hereafter. With this earthy blend, you\'ll be left sleepy and relaxed, with a light buzz to sing you off to sleep.', createdAt: new Date(), updatedAt: new Date()},
     {name: 'Lemon Gelato', strain: 'sativa', description: 'Lemon Gelato is a cross between Sunset Sherbet and Thin Mint Girl Scout Cookies, named in homage to its sweet aroma. A lightly berry aroma, with strong gassy tones.', createdAt: new Date(), updatedAt: new Date()},
     {name: 'Purple Haze', strain: 'hybrid', description: 'This sweet berry blend is distinguished by its dark purple color, and an earthy sweet aroma. Made to relax and chill, but with a heady, giggly high.', createdAt: new Date(), updatedAt: new Date()},
     {name: 'Kush Mints', strain: 'sativa', description: 'An original blend of Girl Scout Cookies and Gelato, these mints will freshen you up! Give in to the gassy and earthy taste of a great high.', createdAt: new Date(), updatedAt: new Date()},
     {name: 'Biscotti', strain: 'indica', description: 'Biscotti is said to have a sweet and buttery aroma, translating into a slightly bitter taste reminiscent of coffee. It leaves you with a happy and euphoric feeling that will leave you with a smile.', createdAt: new Date(), updatedAt: new Date()},
     {name: 'Forbidden Fruits', strain: 'sativa', description: 'The child of Tangie and Cherry Pie, this strain is named for its sweet aroma, and its heady high. Lightly sweet and citrusy, this fruit will have you begging for another bite.', createdAt: new Date(), updatedAt: new Date()},
     {name: 'AK-47', strain: 'hybrid', description: 'This strain offers a strong, fruity scent with a long-lasting and powerful indica feeling. The hybrid strain offers the best of both worlds.', createdAt: new Date(), updatedAt: new Date()},
     {name: 'Wedding Cookies', strain: 'hybrid', description: 'This strain is named for its beautiful sparkling resin and vanilla cake aroma, and gives a great, headdy, euphoric high. It will leave you saying \'I do again\' and again. ', createdAt: new Date(), updatedAt: new Date()},
     {name: 'Green Monster', strain: 'sativa', description: 'This strain was named by Snoop Dogg, who loved the uplifted and energetic feeling, despite its skunky and bitter finish.', createdAt: new Date(), updatedAt: new Date()},
     {name: 'Cookie Monster', strain: 'indica', description: 'Cookie Monster would devour this delicious blend in a second. The sweet and nutty aroma is evocative of fresh baked cookies, and leaves you relaxed and happy, with a good case of the munchies.', createdAt: new Date(), updatedAt: new Date()},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Strains', null, {});
  }
};

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Strains', [
     {name: 'Blender', strainType: 'hybrid', description: 'You\'ve never had weed like this! A unique blend of OG Kush and Girl Scout Cookies, this energizing blend will have you giggling until your neighbors call the cops on you.', photo: "https://hips.hearstapps.com/amv-prod-gp.s3.amazonaws.com/gearpatrol/wp-content/uploads/2020/04/Weed-Terms-Gear-Patrol-Lead-Full.jpg?crop=0.6701030927835051xw:1xh;center,top&resize=640:*", brand: "Weed Brand", createdAt: new Date(), updatedAt: new Date()},
     {name: 'Starry Nights', strainType: 'indica', description: 'This trippy blend will have you seeing stars as it puts you to sleep. Super relaxing and mildly gassy, it will sing you off to a peaceful slumber.', photo: "https://www.verywellmind.com/thmb/J5bhIPrHg5jP67B1l7SGx42k0uo=/614x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/marijuana-454601963-resized-569fd2345f9b58eba4ad583d.jpg", brand: "High Lyfe",createdAt: new Date(), updatedAt: new Date()},
     {name: 'OG Kush', strainType: 'hybrid', description: 'OG Kush is a world famous blend popularized in Los Angeles for its heavy and euphoric high. It will leave you feelin relaxed, happy, and giggly, with strong earthy and citrus flavors.', photo: "https://static.scientificamerican.com/sciam/cache/file/3198624E-C54D-458C-BB35B9DECED8F27D_source.jpg?w=390&h=520&B0D92F1C-3B3E-4B17-9CAC6F8ED0CC6B19", brand: "Joint Payne",createdAt: new Date(), updatedAt: new Date()},
     {name: 'Pineapple Express', strainType: 'hybrid', description: 'The dopest dope. The perfect child of Trainwreck and Hawaiian will have you hopping the express train to a happy, uplifted high.', photo: "https://media.npr.org/assets/img/2019/03/19/weed-bud-bc500c4866252c287b190cd5fe679238b2a91982-s1600-c85.webp", brand: "Nuggs Bunny",createdAt: new Date(), updatedAt: new Date()},
     {name: 'Blue Dream', strainType: 'indica', description: 'Good night, hereafter. With this earthy blend, you\'ll be left sleepy and relaxed, with a light buzz to sing you off to sleep.', photo: "https://cdnph.upi.com/svc/sv/upi/76471296078557/2011/1/740a2b764e33e07748ca341f5662c882/Kids-eat-mothers-pot-cookie.jpg", brand: "Little High",createdAt: new Date(), updatedAt: new Date()},
     {name: 'Lemon Gelato', strainType: 'sativa', description: 'Lemon Gelato is a cross between Sunset Sherbet and Thin Mint Girl Scout Cookies, named in homage to its sweet aroma. A lightly berry aroma, with strong gassy tones.', photo: "https://cannabisnewsbox.com/wp-content/uploads/2021/01/marijuana-gram-in-hand-900x675.jpg", brand: "Top Shelf Cannabis",createdAt: new Date(), updatedAt: new Date()},
     {name: 'Purple Haze', strainType: 'hybrid', description: 'This sweet berry blend is distinguished by its dark purple color, and an earthy sweet aroma. Made to relax and chill, but with a heady, giggly high.', photo: "https://images.news18.com/ibnlive/uploads/2020/09/1599377768_weed.jpeg?impolicy=website&width=510&height=356", brand: "Nuggs Bunny",createdAt: new Date(), updatedAt: new Date()},
     {name: 'Kush Mints', strainType: 'sativa', description: 'An original blend of Girl Scout Cookies and Gelato, these mints will freshen you up! Give in to the gassy and earthy taste of a great high.', photo: "https://metro.co.uk/wp-content/uploads/2019/05/SEI_70681722.jpg?quality=90&strip=all&zoom=1&resize=644%2C429", brand: "Top Shelf Cannabis",createdAt: new Date(), updatedAt: new Date()},
     {name: 'Biscotti', strainType: 'indica', description: 'Biscotti is said to have a sweet and buttery aroma, translating into a slightly bitter taste reminiscent of coffee. It leaves you with a happy and euphoric feeling that will leave you with a smile.', photo: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-weed-porn-in-mason-jar-on-table-royalty-free-image-672213679-1560525382.jpg?crop=0.670xw:1.00xh;0.256xw,0&resize=980:*", brand: "Little High",createdAt: new Date(), updatedAt: new Date()},
     {name: 'Forbidden Fruits', strainType: 'sativa', description: 'The child of Tangie and Cherry Pie, this strain is named for its sweet aroma, and its heady high. Lightly sweet and citrusy, this fruit will have you begging for another bite.', photo: "https://3ncb884ou5e49t9eb3fpeur1-wpengine.netdna-ssl.com/wp-content/uploads/2019/04/lt-governor-texas-declares-marijuana-decriminalization-bill-dead-senate-featured-800x500.jpg", brand: "East Coast Green",createdAt: new Date(), updatedAt: new Date()},
     {name: 'AK-47', strainType: 'hybrid', description: 'This strain offers a strong, fruity scent with a long-lasting and powerful indica feeling. The hybrid strain offers the best of both worlds.', photo: "https://www.marijuanamoment.net/wp-content/uploads/2017/09/weed-2517251_1920-e1543923890731.jpg", brand: "East Coast Green",createdAt: new Date(), updatedAt: new Date()},
     {name: 'Wedding Cookies', strainType: 'hybrid', description: 'This strain is named for its beautiful sparkling resin and vanilla cake aroma, and gives a great, headdy, euphoric high. It will leave you saying \'I do again\' and again. ', photo: "https://i.guim.co.uk/img/media/7137e286682cdd3f4da47ab60c9b876ee303649b/0_0_1936_1209/master/1936.jpg?width=700&quality=45&auto=format&fit=max&dpr=2&s=8568b80bd08d4e289c84925bb4485273", brand: "High Lyfe",createdAt: new Date(), updatedAt: new Date()},
     {name: 'Green Monster', strainType: 'sativa', description: 'This strain was named by Snoop Dogg, who loved the uplifted and energetic feeling, despite its skunky and bitter finish.', photo: "https://static.dw.com/image/48715917_303.jpg", brand: "Nuggs Bunny",createdAt: new Date(), updatedAt: new Date()},
     {name: 'Cookie Monster', strainType: 'indica', description: 'Cookie Monster would devour this delicious blend in a second. The sweet and nutty aroma is evocative of fresh baked cookies, and leaves you relaxed and happy, with a good case of the munchies.', photo: "https://www.verywellmind.com/thmb/VkXNLIg6OVjBqSxVWXBcoOlNeAI=/800x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-874041882-5b8d58f3c9e77c007bed460b.jpg", brand: "Little High",createdAt: new Date(), updatedAt: new Date()},
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

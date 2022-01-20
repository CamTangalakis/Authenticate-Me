'use strict';

const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Users', [
     {email: 'demo@user.com',  username: 'Demo-used', hashedPassword: bcrypt.hashSync('password'), owner: true},
     {email: 'do@user.com',  username: 'TokedAF', hashedPassword: bcrypt.hashSync('password'), owner: false, profilePic: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/awesome-pot-smoker-pot-stoner-high-gorilla-cannabis-leaf-young-wild-free-thomas-larch.jpg"},
     {email: 'dmo@user.com',  username: 'HashedPassword', hashedPassword: bcrypt.hashSync('password'), owner: true, profilePic:"https://images-na.ssl-images-amazon.com/images/I/51Qiwg8x6SL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg"},
     {email: 'd@user.com',  username: '420blazed', hashedPassword: bcrypt.hashSync('password'), owner: true, profilePic:"https://st.depositphotos.com/1013286/1601/v/950/depositphotos_16019547-stock-illustration-vector-drawing-likes-as-stoner.jpg"},
     {email: 'emo@user.com',  username: 'itsglaucoma', hashedPassword: bcrypt.hashSync('password'), owner: false, profilePic: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/skeleton-stoner-mugshot-nikolay-todorov.jpg"},
     {email: 'o@user.com',  username: 'WeedFiend', hashedPassword: bcrypt.hashSync('password'), owner: false, profilePic: "https://media2.westword.com/den/imager/u/magnum/11998782/stoner.jpg?cb=1642608743"},
     {email: 'mo@user.com',  username: 'premiumkusher', hashedPassword: bcrypt.hashSync('password'), owner: true, profilePic: "https://image.shutterstock.com/image-vector/skeleton-jamb-blondie-girl-driving-600w-1839392659.jpg"},
     {email: 'deo@user.com',  username: 'SnoopDogg', hashedPassword: bcrypt.hashSync('password'), owner: false, profilePic: "https://image.shutterstock.com/image-vector/pen-inked-rastafarian-lion-digital-600w-1815670229.jpg"},

   ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};

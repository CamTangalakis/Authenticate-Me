'use strict';

const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Users', [
     {email: 'demo@user.com',  username: 'Demo-used', hashedPassword: bcrypt.hashSync('password')},
     {email: 'do@user.com',  username: 'TokedAF', hashedPassword: bcrypt.hashSync('password')},
     {email: 'dmo@user.com',  username: 'HashedPassword', hashedPassword: bcrypt.hashSync('password')},
     {email: 'd@user.com',  username: '420blazed', hashedPassword: bcrypt.hashSync('password')},
     {email: 'emo@user.com',  username: 'itsglaucoma', hashedPassword: bcrypt.hashSync('password')},
     {email: 'o@user.com',  username: 'WeedFiend', hashedPassword: bcrypt.hashSync('password')},
     {email: 'mo@user.com',  username: 'premiumkusher', hashedPassword: bcrypt.hashSync('password')},
     {email: 'deo@user.com',  username: 'SnoopDogg', hashedPassword: bcrypt.hashSync('password')},

   ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Users', null, {});
  }
};

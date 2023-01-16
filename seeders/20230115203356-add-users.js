'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        username: 'luca1152',
        name: "Luca"
      },
      {
        username: 'ioana',
        name: "Ioana"
      },
      {
        username: 'anonymous',
        name: "I have no name"
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
  }
};
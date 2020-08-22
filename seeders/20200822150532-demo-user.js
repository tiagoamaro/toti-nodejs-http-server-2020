'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

   await queryInterface.bulkInsert('Users', [{
    name: 'Tiago',
    description: 'Professor de Node',
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    name: 'Kaue',
    description: 'Professor de banco de dados',
    createdAt: new Date(),
    updatedAt: new Date()
  }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

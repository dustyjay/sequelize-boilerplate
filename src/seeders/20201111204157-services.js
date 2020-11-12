'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     */
    await queryInterface.bulkInsert(
      'Services',
      [
        {
          title: 'Creative Direction',
          description:
            'Creative Directors play a key role in design and production, as well as in brands and companies. We are responsible for, and leaders of, a group of creatives (art directors, copywriters, designers, photographers, video producers, etc.). We conduct the entire production and make sure everything is running smoothing.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Casting',
          description:
            'In pre-production, we liaise with our clients to assist them in assembling the perfect cast for the roles e.g. voice overs, actors, models etc.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     */
    await queryInterface.bulkDelete('Services', null, {});
  },
};

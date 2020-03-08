
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {
          id: 1, 
          resources_name: 'groves', 
          resources_description: 'graves to keep my hands safe and clean',
          project_id: 1,
        },
        {
          id: 2, 
          resources_name: 'trash cans', 
          resources_description: 'bags to hold the trash',
          project_id: 1,
        },
        {
          id: 3, 
          resources_name: 'computer', 
          resources_description: 'Electronic machine for the job',
          project_id: 2,
        }
      ]);
    });
};

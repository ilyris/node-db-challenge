
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project').del()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        {
          id: 1, 
          project_name: 'tree shake garage', 
          project_description: 'clean out the garage',
          completed: false
        },
        {
          id: 2, 
          project_name: 'build hideir', 
          project_description: 'finish building the mvp',
          completed: false
        },
        {
          id: 3, 
          project_name: 'something more', 
          project_description: 'i have a simple mind, no description here',
          completed: true
        }
      ]);
    });
};

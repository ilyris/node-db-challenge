
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project').del()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        {
          project_name: 'tree shake garage', 
          project_description: 'clean out the garage',
          completed: false
        },
        {
          project_name: 'build hideir', 
          project_description: 'finish building the mvp',
          completed: false
        },
        {
          project_name: 'something more', 
          project_description: 'i have a simple mind, no description here',
          completed: true
        }
      ]);
    });
};

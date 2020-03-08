
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('task').del()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
        {
          id: 1, 
          task_description: 'sweep the floor',
          notes: 'floor needs to be swept',
          completed: false,
          project_id: 1
        },
        {
          id: 2, 
          task_description: 'dust',
          notes: 'cause my garage needs a dusting!',
          completed: true,
          project_id: 1
        },
        {
          id: 3, 
          task_description: 'build main navigation',
          notes: 'consits of styling and functionality.',
          completed: true,
          project_id: 2
        },
      ]);
    });
};

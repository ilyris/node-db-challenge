exports.up = function(knex) {
    return knex.schema.createTable('task', tbl => {
      tbl.increments();
      tbl.text('task_description').notNullable();
      tbl.text('notes');
      tbl.boolean('completed').notNullable();
      tbl.integer('project_id').references('id').inTable('project');
    });
  };
  
  exports.down = function(knex) {
    // drops the entire table
    return knex.schema.dropTableIfExists('task');
  };
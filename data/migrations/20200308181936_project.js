exports.up = function(knex) {
    return knex.schema.createTable('project', tbl => {
      tbl.increments();
      tbl.text('project_name').notNullable();
      tbl.text('project_description');
      tbl.boolean('completed').notNullable();
    });
  };
  
  exports.down = function(knex) {
    // drops the entire table
    return knex.schema.dropTableIfExists('project');
  };
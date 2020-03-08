exports.up = function(knex) {
    return knex.schema.createTable('resources', tbl => {
      tbl.increments();
      tbl.text('resources_name').unique().notNullable();
      tbl.text('resources_description');
      tbl.integer('project_id').references('id').inTable('project');

    });
  };
  
  exports.down = function(knex) {
    // drops the entire table
    return knex.schema.dropTableIfExists('resources');
  };
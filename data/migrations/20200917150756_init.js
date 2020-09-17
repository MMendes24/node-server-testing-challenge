exports.up = function(knex) {
  return knex.schema
  .createTable('states', tbl => {
      tbl.increments()
      tbl.string('name', 24).notNullable().index()
      tbl.integer('population').unsigned()
      tbl.string('capital', 24)
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('states')
};

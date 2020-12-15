exports.up = (knex) => {
  return knex.schema
    .raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
    .createTable('profiles', function (table) {
      table.string('id').notNullable().unique().primary();
      table.string('email');
      table.string('name');
      table.string('avatarUrl');
      table.timestamps(true, true);
    })
    .createTable('dashboard', function (table) {
      table.integer('id').notNullable().unique().primary();
      table.string('name');
      table.string('caseId');
      table.string('country');
      table.string('outcome');
      table.string('case_url');
      table
        .string('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('profiles')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT');
    });
};

exports.down = (knex) => {
  return knex.schema
    .dropTableIfExists('dashboard')
    .dropTableIfExists('profiles');
};

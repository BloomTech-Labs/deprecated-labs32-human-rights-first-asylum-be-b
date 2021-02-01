exports.up = (knex) => {
  return knex.schema
    .createTable('profiles', function (table) {
      table.increments();
      table.string('email');
      table.string('name');
      table.string('avatarUrl');
      table.timestamps(true, true);
    })
    .createTable('cases', (table) => {
      table.increments();
      table.integer('user_id').references('profiles.id');
      table.string('case_pdf').notNullable().unique();
      table.boolean('private');
      table.integer('case_number');
      table.string('outcome');
      table.string('case_title').notNullable();
      table.string('judge_name');
    })
    .createTable('main_categories', (table) => {
      table.increments();
      table.string('main_category_name').unique().notNullable();
    })
    .createTable('sub_categories', (table) => {
      table.increments();
      table.integer('main_category_id').references('main_categories.id');
      table.string('sub_category_name').unique().notNullable();
    })
    .createTable('tags', (table) => {
      table.increments();
      table.integer('main_id').references('main_categories.id').unsigned();
      table.integer('sub_id').references('sub_categories.id').unsigned();
      table.string('tag_name').unique().notNullable();
    })
    .createTable('tags_by_cases', (table) => {
      table.increments();
      table.integer('tag_id').references('tags.id').notNullable().unsigned();
      table.integer('case_id').references('cases.id').notNullable().unsigned();
    })
    .createTable('collections', (table) => {
      table.increments();
      table.integer('user_id').references('profiles.id');
      table.string('collection_name').notNullable().unique();
    })
    .createTable('cases_by_collection', (table) => {
      table.increments();
      table.integer('case_id').references('cases.id').notNullable();
      table.integer('collection_id').references('colletions.id').notNullable();
    });
};

exports.down = (knex) => {
  return knex.schema
    .dropTableIfExists('cases_by_collections')
    .dropTableIfExists('collections')
    .dropTableIfExists('tags_by_cases')
    .dropTableIfExists('tags')
    .dropTableIfExists('subcategories')
    .dropTableIfExists('main_categories')
    .dropTableIfExists('cases')
    .dropTableIfExists('profiles');
};

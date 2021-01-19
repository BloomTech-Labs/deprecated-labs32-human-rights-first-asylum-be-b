
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('main_categories').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('main_categories').insert([
        {
          'main_category_name': 'Protected Ground',
        },
        {
          'main_category_name': 'Particular Social Group',
        },
        {
          'main_category_name': 'Precedential Decision',
        },
        {
          'main_category_name': 'Policies',
        },
        {
          'main_category_name': 'Bars to Asylum',
        },
      ]);
    });
};

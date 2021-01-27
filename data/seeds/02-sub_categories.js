
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('sub_categories')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('sub_categories').insert([
        {
          main_category_id: 1,
          sub_category_name: 'Race',
        },
        {
          main_category_id: 1,
          sub_category_name: 'Religion',
        },
        {
          main_category_id: 1,
          sub_category_name: 'Nationality',
        },
        {
          main_category_id: 1,
          sub_category_name: 'Political Opinion',
        },
        {
          main_category_id: 1,
          sub_category_name: 'Particular Social Group',
        },
        {
          main_category_id: 2,
          sub_category_name: 'Family',
        },
        {
          main_category_id: 2,
          sub_category_name: 'Women in Country',
        },
        {
          main_category_id: 2,
          sub_category_name: 'Gender',
        },
        {
          main_category_id: 2,
          sub_category_name: 'Witness',
        },
        {
          main_category_id: 2,
          sub_category_name: 'Gang',
        },
        {
          main_category_id: 2,
          sub_category_name: 'LGBTQ',
        },
        {
          main_category_id: 3,
          sub_category_name: 'Matter of A-B',
        },
        {
          main_category_id: 3,
          sub_category_name: 'Matter of L-E-A',
        },
        {
          main_category_id: 4,
          sub_category_name: 'Safe Third Parth Country',
        },
        {
          main_category_id: 4,
          sub_category_name: 'Migrant Protection Protocols',
        },
        {
          main_category_id: 4,
          sub_category_name: 'Transit Bad',
        },
        {
          main_category_id: 4,
          sub_category_name: 'Unaccompanied Minor',
        },
        {
          main_category_id: 5,
          sub_category_name: 'One Year Deadline',
        },
        {
          main_category_id: 5,
          sub_category_name: 'Serious Non-Political Crime',
        },
        {
          main_category_id: 5,
          sub_category_name: 'Particularily Serious Crime',
        },
        {
          main_category_id: 5,
          sub_category_name: 'Firm Resettlement',
        },
        {
          main_category_id: 5,
          sub_category_name: 'Safe Third Country',
        }      
      ]);
    });
};

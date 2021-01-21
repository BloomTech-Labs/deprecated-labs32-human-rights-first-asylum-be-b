
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('sub_categories')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('sub_categories').insert([
        {
          sub_category_id: 1,
          sub_category_name: 'Race',
        },
        {
          sub_category_id: 1,
          sub_category_name: 'Religion',
        },
        {
          sub_category_id: 1,
          sub_category_name: 'Nationality',
        },
        {
          sub_category_id: 1,
          sub_category_name: 'Political Opinion',
        },
        {
          sub_category_id: 1,
          sub_category_name: 'Particular Social Group',
        },
        {
          sub_category_id: 2,
          sub_category_name: 'Family',
        },
        {
          sub_category_id: 2,
          sub_category_name: 'Women in Country',
        },
        {
          sub_category_id: 2,
          sub_category_name: 'Gender',
        },
        {
          sub_category_id: 2,
          sub_category_name: 'Witness',
        },
        {
          sub_category_id: 2,
          sub_category_name: 'Gang',
        },
        {
          sub_category_id: 2,
          sub_category_name: 'LGBTQ',
        },
        {
          sub_category_id: 3,
          sub_category_name: 'Matter of A-B',
        },
        {
          sub_category_id: 3,
          sub_category_name: 'Matter of L-E-A',
        },
        {
          sub_category_id: 4,
          sub_category_name: 'Safe Third Parth Country',
        },
        {
          sub_category_id: 4,
          sub_category_name: 'Migrant Protection Protocols',
        },
        {
          sub_category_id: 4,
          sub_category_name: 'Transit Bad',
        },
        {
          sub_category_id: 4,
          sub_category_name: 'Unaccompanied Minor',
        },
        {
          sub_category_id: 5,
          sub_category_name: 'One Year Deadline',
        },
        {
          sub_category_id: 5,
          sub_category_name: 'Serious Non-Political Crime',
        },
        {
          sub_category_id: 5,
          sub_category_name: 'Particularily Serious Crime',
        },
        {
          sub_category_id: 5,
          sub_category_name: 'Firm Resettlement',
        },
        {
          sub_category_id: 5,
          sub_category_name: 'Safe Third Country',
        },
      ]);
    });
};

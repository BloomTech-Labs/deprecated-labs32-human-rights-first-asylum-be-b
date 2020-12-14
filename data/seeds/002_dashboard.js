exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('dashboard')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('dashboard').insert([
        {
          id: '1',
          name: 'Brian Brownstein',
          caseId: 32,
          country: 'United States',
          outcome: 'Pending',
          user_id: '00ulthapbErVUwVJy4x6',
        },
        {
          id: '2',
          name: 'Jim Green',
          caseId: 42,
          country: 'Ukraine',
          outcome: 'Granted',
          user_id: '00ulthapbErVUwVJy4x6',
        },
        {
          id: '3',
          name: 'Joe Black',
          caseId: 32,
          country: 'Nigeria',
          outcome: 'Denied',
          user_id: '00ulthapbErVUwVJy4x6',
        },
        {
          id: '4',
          name: 'Jim Red',
          caseId: 32,
          country: 'Ghana',
          outcome: 'Denied',
          user_id: '00ulthapbErVUwVJy4x6',
        },
      ]);
    });
};

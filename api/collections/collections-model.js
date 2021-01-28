const db = require('../../config/dbConfig.js');

module.exports = {
  getCollectionsByUser,
  insertCollection,
};

async function getCollectionsByUser(id) {
  const collection = await db('collections as c').where({ 'c.user_id': id });
  collection.cases = await db('cases_by_collections as cbc').where({
    'cbc.case_id': id,
  });
  return collection;
}

function insertCollection(newCollection) {
  return db('collections').insert(newCollection);
}

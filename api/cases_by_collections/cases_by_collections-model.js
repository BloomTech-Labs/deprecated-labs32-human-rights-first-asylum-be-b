const db = require('../../config/dbConfig.js');

module.exports = {
  insertCaseByCollection,
  deleteCaseByCollection,
};

function insertCaseByCollection(obj) {
  return db('cases_by_collections').insert(obj);
}

function deleteCaseByCollection(obj) {
  return db('cases_by_collections as cbc').where({
    'cbc.case_id': obj.case_id,
    'cbc.collection_id': obj.collection_id,
  });
}

const db = require('../../config/dbConfig.js');

module.exports = {
  getTags,
  insertTag,
  getTagById,
  // updateTag,
  // removeTag,
};

async function getTags() {
  return await db
    .select('t.id', 'm.main_category_name', 's.sub_category_name', 't.tag_name')
    .from('tags as t')
    .leftJoin('main_categories as m', 't.main_id', 'm.id')
    .leftJoin('sub_categories as s', 't.sub_id', 's.id');
}
function getTagById(id) {
  return db('tags').where({ id }).first();
}

function insertTag(tag) {
  return db('tags').insert(tag);
}

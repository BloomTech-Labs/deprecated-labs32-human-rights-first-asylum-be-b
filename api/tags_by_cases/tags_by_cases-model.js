const db = require('../../config/dbConfig.js');

module.exports = {
  getTagsByCase,
  insertTagsByCase,
  // getTagsByCaseById,
  // updateTagsByCase,
  // removeTagsByCase,
};

async function getTagsByCase(id) {
  const tagIds = await db('tags_by_cases as tbc')
    .where({
      'tbc.case_id': id,
    })
    .select('tag_id');
  const tags = tagIds.map((tagId) => {
    return db('tags')
      .where({
        'tags.id': tagId,
      })
      .first()
      .join('main_categories as main', 'tags.id', 'main.main_category_name')
      .join('sub_categories as sub', 'tags.id', 'sub.sub_category_name');
  });
  return tags;
}

function insertTagsByCase(tag) {
  return db('tags_by_cases as tbc').insert({
    'tbc.tag_id': tag.tag_id,
    'tbc.case_id': tag.case_id,
  });
}

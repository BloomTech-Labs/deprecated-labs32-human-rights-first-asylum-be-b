const db = require('../data/dbConfig.js');

module.exports = {
    getTags,
    insertTag,
    // getTagById,
    // updateTag,
    // removeTag,
}

function getTags(){
    return db('tags').join(
        'main_category as main',
        'tags.id',
        'main.main_category_name'
        ).join(
            'sub_category as sub',
            'tags.id',
            'sub.sub_category_name'
            )
}

function insertTag(tag) {
  return db('tags').insert(tag);
}

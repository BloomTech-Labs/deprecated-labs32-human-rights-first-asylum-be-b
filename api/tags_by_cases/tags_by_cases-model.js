const db = require('../../config/dbConfig.js');

module.exports = {
    getTagsByCase,
    insertTagsByCase,
    // getTagsByCaseById,
    // updateTagsByCase,
    // removeTagsByCase,
}

async function getTagsByCase(id){
    tagIds = await db('tags_by_cases').where({'case_id':id}).select('tag_id')
    tags = tagIds.map(tagId => {
        return db('tags').where({'id':tagId}).first()
        .join(
            'main_categories as main',
            'tags.id',
            'main.main_category_name'
        )
        .join(
            'sub_categories as sub',
            'tags.id',
            'sub.sub_category_name'
        )
    });
}

function insertTagsByCase(tag){
    return db('tags_by_cases').insert({'tag_id':tag.tag_id,'case_id':tag.case_id})
}
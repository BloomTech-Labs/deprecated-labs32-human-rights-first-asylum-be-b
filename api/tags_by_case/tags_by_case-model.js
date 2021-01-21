const db = require('../data/dbConfig.js');

module.exports = {
    getTagsByCase,
    insertTagsByCase,
    // getTagsByCaseById,
    // updateTagsByCase,
    // removeTagsByCase,
}

async function getTagsByCase(id){
    tagIds = await db('tags_by_case').where({'case_id':id}).select('tag_id')
    tags = tagIds.map(tagId => {
        return db('tags').where({'id':tagId}).first().join(
            'main_category as main',
            'tags.id',
            'main.main_category_name'
            ).join(
                'sub_category as sub',
                'tags.id',
                'sub.sub_category_name'
                )
    });
}

function insertTagsByCase(tag){

}